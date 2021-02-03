import './App.css';
import Main from './components/main'
import axios from 'axios'

function App() {
  const hitBackend = () => {
    axios.get('/test')
    .then((response) => {
    console.log(response.data)
    })
    }
  return (
    <div className="App">
      Hello, World!
      <Main />
      <button onClick={hitBackend}>Send request</button>
    </div>
  );
}

export default App;
