import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/Classcomponent.js'
import Welcome from './Components/functionalComponent.js'
import BakerComponent from './Components/Baker';
import AxiosGet from './Components/axiosGetMethod';

function App() {
  return (
    <div className="App">
      <AxiosGet />
    </div>
  );
}

export default App;
