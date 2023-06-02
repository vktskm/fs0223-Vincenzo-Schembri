
type combinable = number | string;

let a:combinable = 0;

a = 'Hello';


function test(b:combinable):combinable{
    return a;
}




type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    names: number;
    startDate: Date
}

let adminUser:Admin = {
    name: "",
    privileges: []
}

//intersection type
type superEmpolyee = Admin & Employee;

let superAdmin:superEmpolyee = {
    name: "",
    privileges: [],
    names: 0,
    startDate: new Date()
} 