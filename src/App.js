import './App.css';
import logo from "./notebook.gif"
import Todo from './notes';
function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt='Todo' id='logo'/>
        {/* <h2>To-DO</h2> */}
      </header>
      <Todo />
    </div>
  );
}

export default App;
