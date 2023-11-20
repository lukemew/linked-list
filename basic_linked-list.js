function linkedList(){

    let head = null
    let length = 0

    const newNode = (value) => {
        return{
            value,
            next: null
        }
    }

    const add = (value) => {
        if(!head){
            head = newNode(value)
            length++
            return head
        }
        let node = head
        while(node.next){
            node = node.next
        }
        node.next = newNode(value)
        length++
        return node.next
    }

    return{
        length: () => length,
        add: (value) => add(value),
        print: () => console.log(head)
    }
     
}

const list = linkedList()
console.log(list.length())
list.add(7)
list.add(8)
list.add(9)
console.log(list.length())
list.print()