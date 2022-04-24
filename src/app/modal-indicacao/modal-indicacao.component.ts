import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Indicacao } from '../models/indicacao';
import { IndicacaoService } from '../services/indicacao.service';
import { FormBuilder } from '@angular/forms';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-modal-indicacao',
  templateUrl: './modal-indicacao.component.html',
  styleUrls: ['./modal-indicacao.component.css'],
})
export class ModalIndicacaoComponent {
  @Input() public title: any;
  @Input() public indicacao: Indicacao;


  indicacaoForm = this.formBuilder.group({
    id: null,
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
  })

  ngOnInit() {
    this.indicacaoForm = this.formBuilder.group(this.indicacao);
  }

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private indicacaoService: IndicacaoService,
  ) {
    this.indicacao = new Indicacao();
    this.indicacaoForm = this.formBuilder.group({
      id: this.indicacao.id,
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
    });
  }

  createForm(indicacao: Indicacao) {
    if (indicacao) {

    }
  }

  onSubmit(): void {
    this.indicacao = new Indicacao(this.indicacaoForm.value);
    if (this.indicacao.id !== null) {
      this.indicacaoService.updateIndicacao(this.indicacao)
        .pipe(catchError(res => {
          return this.handlingErrorIndicacao(res);
        }))
        .subscribe(() => {
          this.indicacaoForm.reset();
          this.activeModal.close();
        });
    } else {
      this.indicacaoService.saveIndicacao(this.indicacao)
        .pipe(catchError(res => {
          return this.handlingErrorIndicacao(res);
        }))
        .subscribe(() => {
          this.indicacaoForm.reset();
          this.activeModal.close();
        });
    }


  }

  handlingErrorIndicacao(res: any) {
    var message = '';
    for (let key in res.error.errors) {
      for (let e in res.error.errors[key]) {
        message += res.error.errors[key] + '\r\n';
      }
    }
    alert(message)
    return message;
  }
}
