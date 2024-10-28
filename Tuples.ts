// const user:(string|number)[]=[1,'hc']
// when order matters...
let user:[string,number,boolean]
user=['zaid',121,true]
// user=[122,'anas',false]

let rgb:[number,number,number]=[255,255,255]

type User=[number,string]
const newUser:User=[112,'z@z.com']
newUser.push(131) // drawback of tuples
newUser[1]='a@a.com'

export {}