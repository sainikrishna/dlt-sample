import './App.css';
import Tranche from './src/tranche';
import Trade from './src/trade';

function App() {
  return (
    <div className="App">
      <Trade modal={true} />
      {/* <Tranche /> */}
    </div>
  );
}

export default App;
