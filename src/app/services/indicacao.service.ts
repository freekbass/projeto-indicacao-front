import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Indicacao } from '../models/indicacao';

@Injectable({
  providedIn: 'root'
})
export class IndicacaoService {

  url = 'http://127.0.0.1:8000/indicacoes'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  getIndicacoes(): Observable<Indicacao[]> {
    return this.httpClient.get<Indicacao[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }


  getIndicacaoById(id: number): Observable<Indicacao> {
    return this.httpClient.get<Indicacao>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveIndicacao(Indicacao: Indicacao): Observable<Indicacao> {
    console.log(Indicacao);
    return this.httpClient.post<Indicacao>(this.url, JSON.stringify(Indicacao), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateIndicacao(Indicacao: Indicacao): Observable<Indicacao> {
    return this.httpClient.put<Indicacao>(this.url + '/' + Indicacao.id, JSON.stringify(Indicacao), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  deleteIndicacao(Indicacao: Indicacao) {
    return this.httpClient.delete<Indicacao>(this.url + '/' + Indicacao.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  changeSituacaoIndicacao(Indicacao: Indicacao) {
    return this.httpClient.post<Indicacao>(this.url + '/change_situacao_indicacao/' + Indicacao.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    // return error;
    return throwError(error);



  };

}
