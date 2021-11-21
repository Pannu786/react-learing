import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo />
      <hr />
      <Todo text='this is second todo' />
      <hr />
      <Todo text='this is 3rd lulu' />
      <hr /> <Todo text='nd so on' />

  
    </div>
  );
}

export default App;
