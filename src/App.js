import './App.css';
import Nav from './components/Nav';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <PasswordGenerator />
      </header>
    </div>
  );
}

export default App;
