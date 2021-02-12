import React from 'react';
import './App.css';
import TodoList from './components/Ironcontacts/Todolist/Todolist'
import IronContacts from './components/Ironcontacts/Ironcontacts'

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <IronContacts />
        <TodoList />
      </div>
    );
  }
}

export default App;