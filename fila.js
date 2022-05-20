 Fila {  //criando uma classe 

    constructor(tamanho) {  //criclassando um construtor
        this.inicio = 0;  //criando o atrinuto de inicio
        this.fim = 0; //criando o atribulo de fim
        this.comprimentoArray = tamanho + 1; // nessa linha o atributo comprimentoArray recebe o atributo +1
        //que foi passado no construtor
        this.array = new Array(this.comprimentoArray); //instanciando um novo obejto do tipo array
    };

    inserir(elemento) { //essa metodo insere o elemento que esta sendo passada depois que a classe termina

        if (!this.estaCheia()) {  //verifica se o array  não esta cheio
            this.array[this.fim] = elemento;//o array na posição fim recebe o elemento
            this.fim = (this.fim + 1) % this.comprimentoArray;
            //quando essa metedo e iniciado pela primeira vez o primeiro elemento e colocado na posição 0
            // dai na linha 15 o atributo fim recebe fim + 1 = 1 modulo 5 que é o tamanho do array, esse resultado
            //é sempre o proprio atributo no caso 1, ou seja 1%5 =1
            //na segunda interação fim valera 1 e na proxima linha valera 2
        }
    }
    remover() { //aqui esse metodo remove os elementos do array

        if (!this.estaVazia()) { //caso o array não esteje vazia ele entra aqui
            this.inicio = (this.inicio + 1) % this.comprimentoArray;
            //aqui ele começa a excluir os elementos do arrey a partir da primeira posição

        }
    }

    estaCheia() {
        //aqui esse metodo verifica se o array esta cheio 
        return (this.fim + 1) % this.comprimentoArray == this.inicio;
        // aqui ele verifica se o modulo de fim + 1 com o comprimento do array é iqual ao atributo inicio
        //caso seje o arrey esta cheio exemplo;
        //na quinta vez que tentar adicionar um novo elemento dentro do array o array vai 
        //estar sem espaços, por que fim +1 = 5 %5 vai dar 0 e 0 é iquak ao atributo inicil que tem o valor 0 tambem
    }

    estaVazia() {
        //aqui esse metodo verifica se o arrey esta vazio
        //se o valor de fim === ao de inicil. obcervação apos colocar o primeiro elemento no array o  fim recebe 1 e 
        //vai incrementando ou jesa ao meos que remova todos os elementos no array o array não estava vazio
        return this.fim == this.inicio;
    }
}


let f = new Fila(5); //cria uma instacia da classe Fila
f.inserir(1) //inserir elemento no array
f.inserir(2)
f.inserir(3)
f.inserir(4)
f.inserir(5)
f.inserir()
f.remover() //remove elemento no array
f.remover()
f.remover()
f.remover()
f.remover()
f.remover()
f.inserir(10)
f.inserir(20)
f.inserir(30)
f.inserir(40)
f.inserir(50)
f.inserir(66)
// susjestão: apaga as linhas de inserir e remover e refaça novamente para ficar mais claro
console.log(f.array)

