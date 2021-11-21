// PEDIDO > HOTDOG > ADICIONAL

class Adicional {
  constructor(nome, valor) {
    this.nome = nome;
    this.valor = valor;
  }
}

class HotDog {
  constructor(nome, valor) {
    this.nome = nome;
    this.valor = valor;
    this.adicionais = [];
  }
}

class Pedido {
  constructor() {
    this.itens = [];
  }

  imprimirPedido() {
    this.itens.map((hotdog) => console.log(hotdog));
  }

  addItem(hotdog) {
    this.itens.push(hotdog);
  }

  inserirAdicional(index, adicional) {
    this.itens[index].adicionais.push(adicional);
  }

  calcularTotalPedido() {
    const valorTotalPorDog = this.itens.map(dog => {
      let hotdogValue = dog.valor;

      let vetor_adicionais = dog.adicionais.map(adicional => adicional.valor);

      let soma_adicionais = vetor_adicionais.reduce((totalizador, adicional) => totalizador = totalizador + adicional, 0);

      return hotdogValue + soma_adicionais;
    });

    let valorFinalPedido = valorTotalPorDog.reduce((totalizador, valorPorDog) => totalizador = totalizador + valorPorDog, 0);

    return valorFinalPedido;
  }

  apagarItem(hotdog) {
    const indexHotDog = this.itens.indexOf(hotdog);

    this.itens = this.itens.filter(hotdog => hotdog.name == "big chicken");
  }
}

const adicional1 = new Adicional("pimenta calabresa", 1);
const adicional2 = new Adicional("cream cheese", 2);
const adicional3 = new Adicional("carne de sol", 3);

const hotdog1 = new HotDog("big chicken", 13);
const hotdog1a = new HotDog("big chicken", 13);
const hotdog2 = new HotDog("majestoso", 14);
const hotdog3 = new HotDog("supremo", 17);

const pedido_carla = new Pedido();

pedido_carla.addItem(hotdog1);
pedido_carla.addItem(hotdog1a);
pedido_carla.addItem(hotdog3);

pedido_carla.inserirAdicional(0, adicional3);
pedido_carla.inserirAdicional(0, adicional1);
pedido_carla.inserirAdicional(0, adicional2);
pedido_carla.inserirAdicional(2, adicional2);

pedido_carla.apagarItem(hotdog1a);

// console.log(pedido_carla.calcularTotalPedido());
pedido_carla.imprimirPedido();

// const vetor = [1, 2, 3, 25];

// // vetor.pop(); // apagar ultimo item do vetor
// // vetor.shift(); // apagar o primeiro item do vetor
// // vetor.splice(1, 2); // apaga quantos elementos eu quiser a partir do index fornecido

// console.log(vetor_lixeira);