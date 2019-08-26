import React, { Component } from 'react'
import './Todo.scss';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task,
            isFinished: this.props.isFinished
        }
    }

    toggleForm = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }
    handleUpdate = (e) => {
        e.preventDefault();
        this.props.updateFunction(this.props.id, this.state.task)
        this.toggleForm()
    }
    handleChange = (e) => {
        this.setState({ task: e.target.value })
    }
    handleComplete = () => {
        this.props.finishFunction(this.props.id)
    }
    render() {
        let markUp;
        this.state.isEditing
            ? markUp = (
                <div>
                    <form action="" onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            name=""
                            id=""
                            value={this.state.task}
                            onChange={this.handleChange} />
                        <button>Save</button>
                        <button onClick={this.toggleForm}>X</button>
                    </form>
                </div >
            )
            : markUp = (
                <div className="Todo">
                    <li className={"Todo__text " + (this.props.isFinished ? '--finished' : '')}
                        onClick={this.handleComplete}>
                        {this.props.task}
                    </li>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={() => this.props.deleteFunction(this.props.id)}>X</button>
                </div >
            )
        return markUp;
    }
}
