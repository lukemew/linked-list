function linkedList(){
    // a variável head começa sendo apontada para null
    let head = null
    let length = 0

    // função para criar um novo nó
    const newNode = (value) => {
        return{
            value,
            next: null
        }
    }

    // adiciona os nós na lista
    const add = (value) => {
        
        // caso head não exista, é criado um novo valor fazendo parte de head
        if(!head){
            head = newNode(value)
            length++
            return head
        }
        // a variável node recebe o valor de head, então percorre a lista até chegar no último elemento
        let node = head
        while(node.next){
            node = node.next
        }
        // ao chegar ao final, o valor de node.next será o item que vem depois do último item da lista, que então é criado
        node.next = newNode(value)
        length++
        return node.next
    }

    const getByIndex = (index) => {
        if(length === 0 || index >= length){
            return null
        }
        let node = head
        let count = 0
        while(count < index  && node.next){
            node = node.next
            count++
        }
        return node
    }

    const getByValue = (value) => {
        if(length === 0){
            return null
        }
        let node = head
        
        if(node.value === value){
            return node
        } 
        while(node.next){
            node = node.next
            if(node.value === value){
                return node
            } 
        }
        return null
    }

    return{
        // ============== FUNÇÕES ================

        // retorna o tamanho atual da lista
        length: () => length,
        // serve para adicionar valores
        add: (value) => add(value),
        // ajuda a mostrar a lista de uma maneira mais compreensivel
        print: () => console.log(head),
        // procura algum elemento da lista através do índice
        getByIndex: (index) => getByIndex(index),
        // procura algum elemento da lista através do valor
        getByValue: (value) => getByValue(value)
    }
     
}

const list = linkedList()
list.add(7)
list.add(8)
list.add(9)
console.log(list.getByValue(2))
