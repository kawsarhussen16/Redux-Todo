import React, { Component } from 'react';
import TodoList from './components/TodoList';
import styled from 'styled-components';


class App extends Component {
  render() {
    return (
      <AppBar className="App">
        <div className='wrapper'>
          <h1 className='header'> My ToDo Lists: </h1>
          <TodoList className='todoCont' />
        </div>
      </AppBar>
    );
  }
}

export default App;


const AppBar = styled.div` 
  h1{
    text-align: center;
  }
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
    border: 3px solid grey;
      .header{
        width: 100%;
      }
      .todoCont{
        width : 100%;
      }
    }
`;