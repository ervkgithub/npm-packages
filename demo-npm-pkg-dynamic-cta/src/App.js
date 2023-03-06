
import './App.css';
import { Cta } from 'dynamic-cta/dist/index'
import{Banner} from 'banner-variant/dist/index'

function App() {
  return (
    <div className="App">
     <p>NPM Packages demo</p>
     <Cta label="Hello" kind="danger" type="button" />
     <Banner direction="left" content_bg_color="yellow" />
    </div>
  );
}

export default App;
