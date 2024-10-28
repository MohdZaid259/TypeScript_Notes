// arg must be a number(default 5)
// return type must be number
function add(num:number=5):number{ 
  return num+2
}
console.log(add())

// args mustbe of same type of whats there in params
function signUp(name:string,email:string,isPaid:boolean):void{}
signUp('zaid','z@z.com',true)

// arrow fn :: with default params & object return
let loginUser=(name:String,email:String,pass:boolean=false):{}=>{
  return {'sdfa':[],'efaa':23e4}
}
loginUser('zaid','z@z.com')

// conditinal return
function confuse(val:number):boolean|string{
  if(val>5) return true
  return 'done'
}

const heros=['thor','iron','cap']
// const heros=[2,1,3]
heros.map((item):string=>{
  return `hail ${item}`
})

export {}