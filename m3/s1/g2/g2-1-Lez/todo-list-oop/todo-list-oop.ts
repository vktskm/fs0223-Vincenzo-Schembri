class TodoList{

    mainContainer:HTMLElement|null;
    button!:HTMLButtonElement;
    input!:HTMLInputElement;
    target!:HTMLElement;
    todoArr:string[] = [];

    constructor(selector:string){
        this.mainContainer = document.querySelector(selector);
        this.creaHTMLBase();
        this.addTodo();
    }

    protected creaHTMLBase(){

        let row = this.createElementWithClass('div','row');
        let inputCol = this.createElementWithClass('div','col-8');
        let buttonCol = this.createElementWithClass('div','col');
        //Effettua un casting <HTMLInputElement>
        this.input = <HTMLInputElement> this.createElementWithClass('input','form-control');
        this.input.type = 'text';
        this.input.placeholder = 'Scrivi qualcosa';


        this.button = <HTMLButtonElement> this.createElementWithClass('button','btn','btn-primary');
        this.button.textContent = 'Inserisci';


        this.target = this.createElementWithClass('div','lista');

        inputCol.append(this.input);
        buttonCol.append(this.button);
        row.append(inputCol, buttonCol)
        this.mainContainer?.append(row,this.target);

    }

    protected addTodo(){
        this.button.addEventListener('click',() => {

            let newTodo = this.createElementWithClass('div', 'alert', 'alert-info');
            newTodo.textContent = this.input.value;

            this.saveTodo(this.input.value);

            this.target.append(newTodo)

        })
    }

    protected createElementWithClass(tagName: string, ...className: string[]){
        let element:HTMLElement = document.createElement(tagName);
        element.classList.add(...className);
        return element;
    }

    protected saveTodo(todoStr:string){
        this.todoArr.push(todoStr)
    }

}

let todo = new TodoList('#todo1');
let todo2 = new TodoList('#todo2');

