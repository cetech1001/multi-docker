import logo from './logo.svg';
import './App.css';
import OtherPage from "./OtherPage";
import Fib from "./Fib";
import {Link, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Fibonacci Calculator</p>
        <Link className="App-link" to="/">Home</Link>
        <Link className="App-link" to="/otherpage">Other Page</Link>
      </header>
      <div>
        <Route exact path={"/"} component={Fib}/>
        <Route exact path={"/otherpage"} component={OtherPage}/>
      </div>
    </div>
  );
}

export default App;
