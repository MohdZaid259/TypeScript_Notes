abstract class TakePhoto{
  constructor(
    public cameraMode:string,
    public filter:string
  ){}
}
class Instagram extends TakePhoto{
  constructor(
    public cameraMode:string,
    public filter:string,
    public burst:number // can be extended
  ){
    super(cameraMode,filter)
  }
}
const zaid =new Instagram('test','one',3)

interface Story{
  createStory():void
}
class InstagramStory extends Instagram implements Story{
  createStory(): void {
    throw new Error("Method not implemented.");
  }

}

export {}