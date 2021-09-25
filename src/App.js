import './App.css';
import Nav from './components/Nav';
import PasswordGenerator from './components/PasswordGenerator';
import RandomPassword from './components/RandomPassword';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div className="conteiner">
        <PasswordGenerator />
        <RandomPassword />
        </div>
      </header>
    </div>
  );
}

export default App;
