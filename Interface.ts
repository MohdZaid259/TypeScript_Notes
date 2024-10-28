interface User{
  readonly _id:number,
  email:string,
  userId:number,
  googleId?:string,
  startTrail():string //fn with return type string
  getCoupon(coupon:string,value:number):number
}
const zaid: User = {
  _id:22,
  email:'z@z.com',
  userId:221,
  startTrail:()=>{
    return 'trail started!'
  },
  getCoupon:(name:'chai31',off:10)=>{
    return 10
  }
}
export {}