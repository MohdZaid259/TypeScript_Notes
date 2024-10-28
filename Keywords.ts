type User ={
  readonly _id:string, // can't change it's value
  name:string,
  email:string,
  isActive:boolean,
  upi?:number // optional key
}

let myUser:User={
  _id:'1234',
  name:'zaid',
  email:'z@z.com',
  isActive:false
}
myUser.name='anas'
// myUser._id='2394' // immutable
// what if id wouldve been an array, wouldbe able to push? - NO

type cardNumber={
  cardNumber:string
}
type cardDate={
  cardDate:string
}
type cardDetails=cardNumber & cardDate & { // combining types
  cvv:number
}  
let card1:cardDetails={
  cardNumber:'abc',
  cardDate:'12oct',
  cvv:242
}
export {}