export class User {

  id:number = 0;
  name!:string;
  lastName!:string;

  constructor(name:string, lastName:string, id:number = 0) {

    this.name = name;
    this.lastName = lastName;
    this.id = id;

  }

}
