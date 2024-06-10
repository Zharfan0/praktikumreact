import logo from './logo192.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h>Klan Uchiha merupakan klan yang sangat spesial, Salah satunya yaitu matanya.</h>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mangenkyou Sharingan adalah Kekkei Genkai klan Uchiha.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Penasaran???
        </a>
      </header>
    </div>
  );
}

export default App;
