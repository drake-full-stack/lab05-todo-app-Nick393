import { useState } from "react";
import "./App.css";
import Task from "./Components/Task";
import InputTask from "./Components/InputTask";

function App() {
  return(
  <>
    
  <h1>My ToDo list</h1>
  <InputTask/>
  <Task text="walk dog"/>;
  <Task text="do homework"/>;
  <Task/>;
  </>
  );
}

export default App;
