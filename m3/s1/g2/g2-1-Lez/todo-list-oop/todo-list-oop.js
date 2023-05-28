"use strict";
class TodoList {
    constructor(selector) {
        this.todoArr = [];
        this.mainContainer = document.querySelector(selector);
        this.creaHTMLBase();
        this.addTodo();
    }
    creaHTMLBase() {
        var _a;
        let row = this.createElementWithClass('div', 'row');
        let inputCol = this.createElementWithClass('div', 'col-8');
        let buttonCol = this.createElementWithClass('div', 'col');
        this.input = this.createElementWithClass('input', 'form-control');
        this.input.type = 'text';
        this.input.placeholder = 'Scrivi qualcosa';
        this.button = this.createElementWithClass('button', 'btn', 'btn-primary');
        this.button.textContent = 'Inserisci';
        this.target = this.createElementWithClass('div', 'lista');
        inputCol.append(this.input);
        buttonCol.append(this.button);
        row.append(inputCol, buttonCol);
        (_a = this.mainContainer) === null || _a === void 0 ? void 0 : _a.append(row, this.target);
    }
    addTodo() {
        this.button.addEventListener('click', () => {
            let newTodo = this.createElementWithClass('div', 'alert', 'alert-info');
            newTodo.textContent = this.input.value;
            this.saveTodo(this.input.value);
            this.target.append(newTodo);
        });
    }
    createElementWithClass(tagName, ...className) {
        let element = document.createElement(tagName);
        element.classList.add(...className);
        return element;
    }
    saveTodo(todoStr) {
        this.todoArr.push(todoStr);
    }
}
let todo = new TodoList('#todo1');
let todo2 = new TodoList('#todo2');
//# sourceMappingURL=todo-list-oop.js.map