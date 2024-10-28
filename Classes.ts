// we can have vars/fn as access specifiers

// class User{
//   public email:string
//   private name:string
//   readonly city:string='lucknow'
//   constructor(email:string,name:string){
//     this.email=email;
//     this.name=name
//   }
// }
// --OR--
class User{
  readonly city:string='lucknow'
  constructor(
    public email:string, // accessible everywhere
    protected name:string, // to inherited classes
    private userId:string // inside main class only
  ){}
  get getId():string{ // getter access the private properties of class from within the class.
    return this.userId
  } 
  // setter update the private.....
  set getId(num){ // setter cant have return type
    if(num.includes('s')){
      this.userId=`${this.userId}+vvip`
    }
  }
}

const zaid = new User('z@z.com','zaid','s313')
// console.log(zaid.name) //not accessible

export {}