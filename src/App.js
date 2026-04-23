import logo from './logo.svg';
import './App.css';
import Users from './Users';
import User from './User';

function App() {
  let data = "Click Event Example";
  function clickEvent(){
     data = "Button Clicked";
    alert("Button CLicked");
  }
  return (
    <div className="App">
      <h1>React tut</h1>
      <h3>Component Example</h3>
      <User />
      <Users />
      <h3>{data}</h3>
      <button onClick={clickEvent}>Click Me</button>
    </div>
  );
}

export default App;
