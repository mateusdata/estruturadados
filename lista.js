//lista em java script


class Node {   //classe node/ Nó  
    constructor(key) {
        this.key = key    //chave do nó
        this.prev = null  // nó anterior
        this.next = null  // nó próximo
    };

    toString() {
        return '<-' + this.key.toString() + '->' 
        // método que retorna o conteudo do nó em forma de string
        
    }
}

class List {
    constructor() {
        this.head = null // head é a cabeça da lista. Onde aqui, o head recebe o valor nulo  
    }
    toString() {
        let r = ''
        let x = this.head  // o x pegou a cabeça da lista
        while (x != null) {
            r = r + x.toString()
            x = x.next
        }
        return r // método que retorna o conteudo do nó em forma de string
    }

    list_search(k) {
       let  x = this.head
        while (x != null && x.key != k) {
            x = x.next
        }
        return x
    }

    list_insert(x) {

        if (this.head == null) {
            this.head = x
        }
        else {
            let y = this.head
            let z = y
            while (y != null && x.key > y.key) {
                y = y.next
                if (y != null) {
                    z = y
                }
            }

            if (y != null) {
                if (y.prev != null) {
                    y.prev.next = x
                }
                else {
                    this.head = x
                }
                x.prev = y.prev
                y.prev = x
                x.next = y
            }
            else {
                z.next = x
                x.prev = z
            }

        }
    }

    list_delete(x) {
        if (x?.prev != null) {
            x.prev.next = x.next
        }
        else {
            this.head = x?.next
        }
        if (x?.next != null) {
            x.next.prev = x.prev
        }
    }


}

minha_lista = new List()
minha_lista.list_insert(new Node(key=10)) // esse valor que esta passando no paramentro é 
//o valor de Key que esta na classe Node. // pode-se usar new Node(key=10)) ou new Node(10))
minha_lista.list_insert(new Node(key=10))
minha_lista.list_insert(new Node(key=20))
minha_lista.list_insert(new Node(key=20))
minha_lista.list_insert(new Node(key=7))
minha_lista.list_insert(new Node(key=15))
minha_lista.list_insert(new Node(key=-1))
minha_lista.list_insert(new Node(key=8))
minha_lista.list_insert(new Node(key=0))
console.log(`lista completa: ${minha_lista}`)

// busca pela chave 7
k1 = 7
r1 = minha_lista.list_search(k1)
console.log(`busca por: ${k1} resultado: ${r1}`)


//#busca pela chave 15
k2 = 15
r2 = minha_lista.list_search(k2)
console.log(`busca por: ${k2} resultado: ${r2}`)

no_rem = minha_lista.list_search(10)
minha_lista.list_delete(no_rem)

console.log(`lista depois delete: ${minha_lista}`)
