import React, {Component} from 'react';

class TodoList extends Component  {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange(event){
        this.setState ({
            userInput : event.target.value
        }, () => console.log(this.state.userInput))
    }

    addTodo(event) {
        event.preventDefault();

        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        }, () => console.log(this.state))
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div key={item} className="list-group-item">
                {item} | <button  className="btn btn-danger" value={item} onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            )
        } )
    }

    deleteTodo(event) {
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        })
    }

    render() {
        return(
            <div>
                <h1 align="center">Notre Todo List</h1>
                
                <form className="form-row align-items-center">
                    <input 

                    value={this.state.userInput} 
                    onChange={this.onChange.bind(this)}
                    type="text" 
                    placeholder="Renseigner un lien" 
                    className="form-control mb2"
                    />
                    <button className="btn btn-primary" onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form><br />
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
            );
    }
}

export default TodoList;