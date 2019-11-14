import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from '../actions/Action';
import styled from 'styled-components';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    handleChange = e => {
        this.setState({ inputValue: e.target.value })
    }
    createNewTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.inputValue)
        this.setState({ inputValue: "" })
    }

    toggleItem = (e, index) => {
        e.preventDefault()
        this.props.toggleTodo(index)
    }

    deleteItem = (e, index) => {
        e.preventDefault()
        this.props.deleteTodo(index)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.createNewTodo}>
                    <InputBox>
                        <input
                            type='text'
                            value={this.state.inputValue}
                            onChange={this.handleChange}
                        />
                        <SubmitButton className="submit" type='submit'> Add Todo</SubmitButton>
                    </InputBox>

                    <div>
                        {this.props.todos.map((todoItem, index) => {
                            return (
                                <Todo key={index} >
                                    <div style={{ textDecoration: todoItem.complete ? 'line-through' : 'none' }} onClick={e => this.toggleItem(e, index)} >
                                        {todoItem.todo}
                                    </div>
                                    <Button onClick={e => this.deleteItem(e, index)} >delete</Button>
                                </Todo>
                            )
                        })}
                    </div>
                </form>
            </div >
        );

    }

}
function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo })(TodoList);
const Todo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

const Button = styled.div`
    margin: 2px;
    padding: 3px;
    border: 2px solid red;
    width: 50px;
    height: auto;
    border-radius: 5px;

    &:hover{
        background: white;
        color: red;
        cursor: pointer;
    }

`
const SubmitButton = styled.div`
    margin: 2px;
    padding: 3px;
    border: 2px solid green;
    width: 80px;
    height: auto;
    border-radius: 5px;
    &:hover{
        background: black;
        color: green;
        cursor: pointer;
    }

`

const InputBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px auto;

`