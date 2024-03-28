class Contato {
  nome: string
  telefone: string
  email: string
  descricao: string
  id: number

  constructor(
    nome: string,
    telefone: string,
    email: string,
    descricao: string,
    id: number
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.descricao = descricao
    this.id = id
  }
}

export default Contato
