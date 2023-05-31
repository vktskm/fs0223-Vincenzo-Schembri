export class Post {
  id:number;
  title:string;
  type: string;
  active:boolean;


  constructor(id:number, title:string, type:string , active:boolean){
    this.id = id;
    this.title = title;
    this.type = type;
    this.active = active;
  }

}
