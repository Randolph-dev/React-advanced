import {About as _About} from "./About"
import './App.css'

const App = () => {
  const someString = "Hello World";
  return (
    <div>
      Home
      <_About string={someString}/>
    </div>
  );
};

export default App;
