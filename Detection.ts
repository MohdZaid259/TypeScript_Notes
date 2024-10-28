type Fish ={swim:()=>void}
type Bird ={Fly:()=>void}

// type guard
function isFish(pet:Fish|Bird):pet is Fish{
  return (pet as Fish).swim !== undefined
} 
function getFood(pet:Fish|Bird){
  if(isFish(pet)){
    return 'fish food'
  }else{
    return 'bird food'
  }
}

interface Circle{
  kind:'circle'
  radius:number
}
interface Square{
  kind:'square'
  side:number
}
interface Rectangle{
  kind:'rectangle'
  length:number
  width:number
}
type Shape = Circle|Square|Rectangle

function getTrueShape(shape:Shape){
  if(shape.kind==='circle'){
    return Math.PI*shape.radius**2
  }else if(shape.kind==='square'){
    return shape.side*shape.side
  }else{
    return shape.length*shape.width
  }
}
function area(shape:Shape){
  switch(shape.kind){
    case 'circle':
      return Math.PI*shape.radius**2
    case 'square':
      return shape.side*shape.side
    case 'rectangle':
      return shape.length*shape.width
    default: 
      const _defaultForShape:never = shape
      return _defaultForShape
  }
}