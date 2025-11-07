const myFirst = 250
console.log(myFirst)

const typeofmyFirst = (typeof myFirst)
console.log(typeofmyFirst)
let age = 10
let sum = 200
let totalcount = 5

function add(increment,multiplier){
   sum = sum + 100
   return
   totalcount = totalcount + 200
}
const newage = add(3,6)
console.log(sum,totalcount)

let myfriends =[]

function addfriend(name){
    myfriends.unshift(name)
    console.log(myfriends)
}
addfriend("Alice")
addfriend("Bob")
addfriend("Charlie")