import { Component, OnInit } from '@angular/core';
import { Indicacao } from '../models/indicacao';
import { IndicacaoService } from '../services/indicacao.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalIndicacaoComponent } from '../modal-indicacao/modal-indicacao.component';

@Component({
  selector: 'app-indicacao-list',
  templateUrl: './indicacao-list.component.html',
  styleUrls: ['./indicacao-list.component.css']
})
export class IndicacaoListComponent implements OnInit {

  indicacoes: Indicacao[] | undefined;

  constructor(
    private indicacaoService: IndicacaoService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getIndicacoes();
  }

  openModal() {
    let modalRef = this.modalService.open(ModalIndicacaoComponent);
    modalRef.componentInstance.title = 'Nova Indicacao';
  }

  getIndicacoes() {
    this.indicacaoService.getIndicacoes().subscribe((indicacoes: Indicacao[]) => {
      this.indicacoes = indicacoes;
    });
  }

  editIndicacao(id: any) {
    this.indicacaoService.getIndicacaoById(id).subscribe((indicacao: Indicacao) => {
      let modalRef = this.modalService.open(ModalIndicacaoComponent);
      modalRef.componentInstance.title = 'Editar Indicacao';
      modalRef.componentInstance.indicacao = indicacao;
    });
  }

  removerIndicacao(indicacao: Indicacao) {
    if (confirm("Tem ceteza que deseja remover?  " + indicacao.nome)) {
      this.indicacaoService.deleteIndicacao(indicacao).subscribe(() => {
        alert('Indicacao nº ' + indicacao.nome + ' removida');
        this.getIndicacoes();
      });
    }
  }

  changeSituacaoIndicacao(indicacao: Indicacao) {
    this.indicacaoService.changeSituacaoIndicacao(indicacao).subscribe(() => {
      alert('Situação alterada com sucesso!');
      this.getIndicacoes();
    })
  }

}
