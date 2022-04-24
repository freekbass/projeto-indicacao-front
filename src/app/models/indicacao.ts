export class Indicacao {
  id: number | null = null;
  nome: string | null = null;
  email: string | null = null;
  cpf: string | null = null;
  telefone: string | null = null;
  situacao: string | null = null;
  descricao_situacao: string | null = null;
  constructor(init?: Partial<Indicacao>) {
    Object.assign(this, init);

  }


}




