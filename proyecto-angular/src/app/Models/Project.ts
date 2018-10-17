export class Project{

    constructor(
       public _id:string,
       public name:String,
       public description:String,
       public category:String,
       public year:Number,
       public langs:String,
       public image:String
    ){}
}