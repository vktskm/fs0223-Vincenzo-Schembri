import { Itodo } from "../Interface/itodo";

export class Todo implements Itodo {
  id?: number;
  title: string;
  completed: boolean;

  constructor( title: string, completed: boolean, id?: number ){
      this.id = id;
      this.title = title;
      this.completed = completed;
  }

}
