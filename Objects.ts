type User={
  name:string,
  email:string,
  isActive:boolean
}

//custom type
function createAdmin(user:User):User{
  return {name:'c',email:'d',isActive:true}
}
createAdmin({name:'a',email:'b',isActive:false})

// bad behaviour of obj when passed in a variable
function createUser({name:string,isPaid:boolean}){}

let nesUser={name:'zaid',isPaid:true,email:'z@z.com'}
createUser(nesUser)

export {}