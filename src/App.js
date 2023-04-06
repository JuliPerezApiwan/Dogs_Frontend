import './App.css';
import { Route } from 'react-router-dom'
import Landing from './components/LandingPage/landing';
import Home from './components/Home/home';
import DogDetail from './components/DogDetail/dogDetail';
import Form from './components/Form/form';

function App() {
  return (
    <div className="App">
      <Route path='/landing' component={Landing}/>
      <Route path='/home' component={Home}/>
      <Route path='/dogs/:id' component={DogDetail} />
      <Route path='/form' component={Form} />
    </div>
  );
}

export default App;
