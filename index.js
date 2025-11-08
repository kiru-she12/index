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

//equality
const result = (5 === '5')
console.log(result)

//objects
const myObj = {
    keyname1: {
        'keyname 2.1': 'hello',
        obj2 : {
           key: null 
        }
    }, 
       
    'keyname2': 'value2',
    'keyname3': 'value3'
}
console.log(myObj['keyname1'])

const myprofile = {
    name : 'kiru',
    age : 22
}

const secondProfile = {
    name : 'She',
    age : 33
}
function mutate(obj){
    console.log(obj.age)
}
mutate(secondProfile)
