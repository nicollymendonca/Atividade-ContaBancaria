class Empregado {
    nome: string;
    cpf: string;
    salarioBase: number;
  
    constructor(nome: string, cpf: string, salarioBase: number) {
      this.nome = nome;
      this.cpf = cpf;
      this.salarioBase = salarioBase;
    }
  
    calcularSalario(): number {
      return this.salarioBase;
    }
}
  
  class Assalariado extends Empregado {
    constructor(nome: string, idade: number, cpf: string, salarioBase: number) {
      super(nome, cpf, salarioBase);
    }
  
    calcularSalario(): number {
      return this.salarioBase;
    }
}
  
  class Comissionado extends Empregado {
    totalVenda: number;
    taxaComissao: number;
  
    constructor(
      nome: string,
      cpf: string,
      salarioBase: number,
      totalVenda: number,
      taxaComissao: number
    ) {
      super(nome, cpf, salarioBase);
      this.totalVenda = totalVenda;
      this.taxaComissao = taxaComissao;
    }
  
    calcularSalario(): number {
      return this.salarioBase + this.totalVenda * this.taxaComissao;
    }
}
  
  class Horista extends Empregado {
    horasTrabalhadas: number;
    precoHora: number;
  
    constructor(
      nome: string,
      idade: number,
      cpf: string,
      salarioBase: number,
      horasTrabalhadas: number,
      precoHora: number
    ) {
      super(nome, idade, cpf, salarioBase);
      this.horasTrabalhadas = horasTrabalhadas;
      this.precoHora = precoHora;
    }
  
    calcularSalario(): number {
      return this.salarioBase + this.horasTrabalhadas * this.precoHora;
    }
}
const empregado1 = new Assalariado("Ayrton", 30, "111.111.111-11", 2000);
console.log(empregado1.calcularSalario()); 
  
const empregado2 = new Comissionado("Sebastian", 19, "222.222.222-22", 1500, 5000, 0.1);
console.log(empregado2.calcularSalario()); 
  
const empregado3 = new Horista("Niki", 22, "333.333.333-33", 0, 40, 30);
console.log(empregado3.calcularSalario());