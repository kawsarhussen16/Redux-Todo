import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import styled from 'styled-components';
const AppBar = styled.div` 
  background: #FFD5D5;
  overflow-x: hidden;
  min-height: 600px;
  padding: 5% 30%;
  margin: -2%;
    .wrapper{
    padding: 5%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 70%;
    min-height: 300px;
    border: 3px solid pink;
      .header{
        width: 100%;
      }
      .todoCont{
        width : 100%;
      }
    }
`;

class App extends Component {
  render() {
    return (
      <AppBar className="App">
        <div className= 'wrapper'>
          <h1 className= 'header'>{this.props.myTodos}</h1>
          <TodoList  className= 'todoCont'/>
        </div>
      </AppBar>
    );
  }
}

function mapStateToProps(state) {
  return { myTodos: state.title }
}

export default connect(mapStateToProps, {})(App);