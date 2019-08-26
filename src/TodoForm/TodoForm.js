import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        }
    }

    handleChange = (e) => {
        let newTodo = e.target.value;
        this.setState({ todo: newTodo })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitFunction(this.state.todo);
        this.setState({ todo: '' })
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        value={this.state.todo}
                        onChange={this.handleChange} />
                    <button>Add todo</button>
                </form>
            </div >
        )
    }
}
