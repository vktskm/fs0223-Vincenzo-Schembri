export class Post{
    id: number;
    body: string;
    title: string;
    active: boolean;
    constructor(id: number, body: string, title: string, active: boolean){
      this.id = id;
      this.body = body;
      this.title = title;
      this.active = active;
    }
}