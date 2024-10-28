let score:number|string|boolean = 33 

type User ={
  username:string,
  id:number
}
type Admin ={
  name:string,
  valid:boolean
}
let zaid:User|Admin={username:'zaid',id:82}
zaid={name:'zaid',valid:true}

function getDb(id:number|string|null){ // type narrowing
  if(typeof id === 'string'){
    id.toLowerCase()
  }else if(!id){
    console.log('no id')
  }else{
    console.log('its a number')
  }
}

let seatAllotment:'aisle'|'middle'|'window'
// seatAllotment='crew' 

const data:number[] = [1,2,3] // array with numbers only
const data2:string[] = ['1','2','3'] // array with strings only
const data3:(string|number)[] = ['1','2',3] // number-string mixed array
const data4:string[]|number[] = ['1','2','3'] // either string-only arr or number-only arr

export {}