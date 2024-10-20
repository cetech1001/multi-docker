import './App.css';
import OtherPage from "./OtherPage";
import Fib from "./Fib";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <header className="App-header">
                  <p>Fibonacci Calculator</p>
                  <Link className="App-link" to="/">Home</Link>
                  <Link className="App-link" to="/otherpage">Other Page</Link>
              </header>
              <Routes>
                  <Route path="/" element={<Fib/>}/>
                  <Route path="/otherpage" element={<OtherPage/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
