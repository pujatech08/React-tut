import logo from './logo.svg';
import './App.css';
import Users from './Users';
import User from './User';
import { useState } from 'react';
import ClassState from './ClassState';
import PropFunction from './PropFunction';
import PropClass from './PropClass';
import InputBox from './InputBox';
import HideShow from './HideShow';
import BasicForm from './BasicForm';
import ConditionalRender from './ConditionalRender';
import BasicFormValidation from './BasicFormValidation';
import Constructor from './Constructor';
import RenderLifeCyclic from './RenderLifeCyclic';
import ComponentDidMount from './ComponentDidMount';
import ComponentDidUpdate from './ComponentDidUpdate';
import ComponentUnMount from './ComponentUnMount';
import UseEffectExp from './UseEffectExp';
import UseEffectFunc from './UseEffectFunc';
function App() {
  let data = "Click Event Example";
  function clickEvent(){
     data = "Button Clicked";
    alert("Button CLicked");
  }

  const [count,setCount] = useState(0);
  function updateData(){
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>React tut</h1>
      <h3>Component Example</h3>
      <User />
      <Users />
      <h3>{data}</h3>
      <button onClick={clickEvent}>Click Me</button>
      <h3>State in React</h3>
      <h3>Count: {count}</h3>
      <button onClick={updateData}>Update Data</button>
      <ClassState />
      <h3>Props in React</h3>
      <PropFunction name="Ram" age={26}/>
      <PropClass name="Test" />
      <h3>Input event</h3>
       <InputBox />
      <HideShow />
      <BasicForm />
      <ConditionalRender />
      <BasicFormValidation />
      {/* <passFuncProps data="Hello, Props!" /> */}
      <Constructor />
      <RenderLifeCyclic />
      <ComponentDidMount />
      <ComponentDidUpdate />
      <ComponentUnMount />
      <UseEffectExp />
      <UseEffectFunc />
    </div>
  );
}

export default App;
