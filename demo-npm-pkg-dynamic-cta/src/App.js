
import './App.css';
import { Cta } from 'dynamic-cta/dist/index'

function App() {
  return (
    <div className="App">
     <p>NPM Packages demo</p>
     <Cta label="Hello" kind="danger" type="button" />
    </div>
  );
}

export default App;
