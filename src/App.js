import './App.css';
import Tranche from './src/tranche';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from './src/home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="tranche" exact element={<Tranche />} />
        </Routes>
    </HashRouter>
      
      {/* <Tranche /> */}
    </div>
  );
}

export default App;
