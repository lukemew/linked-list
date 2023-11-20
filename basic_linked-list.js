function linkedList(){

    let head = null
    let length = 0

    return{
        length: () => length
    }
}
const list = linkedList()
console.log(list.length())