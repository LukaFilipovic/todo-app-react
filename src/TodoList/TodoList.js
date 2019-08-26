import React, { Component } from 'react'
import { default as UUID } from "uuid";
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
            ]
        }
    }


    // Handler functions
    addTodo = (newtodo) => {
        let todo = {
            key: UUID.v4(),
            id: UUID.v4(),
            task: newtodo,
            isFinished: false
        }
        let todos = [...this.state.todos, todo]
        this.setState({ todos: todos })
    }

    removeTodo = (id) => {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos: todos })
    }

    updateTodo = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            } else {
                return todo;
            }
        })
        this.setState({
            todos: updatedTodos
        })
    }

    finishTodo = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isFinished: !todo.isFinished }
            } else {
                return todo
            }
        })
        this.setState({ todos: updatedTodos })
    }



    render() {
        return (
            <div>
                {this.state.todos.map(td =>
                    <Todo
                        task={td.task}
                        key={td.key}
                        id={td.id}
                        isFinished={td.isFinished}
                        deleteFunction={this.removeTodo}
                        submitFunction={this.addTodo}
                        updateFunction={this.updateTodo}
                        finishFunction={this.finishTodo}
                    />
                )}
                <TodoForm
                    submitFunction={this.addTodo} />
            </div>
        )
    }
}
