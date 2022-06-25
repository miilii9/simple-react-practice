import { Route , BrowserRouter , NavLink , Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Articals from './pages/Articals';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className='nav'>
        <NavLink exact  to='/'>Home</NavLink>
        <NavLink  to='/about'>About</NavLink>
        <NavLink  to='/contact'>Contact</NavLink>
      </nav>
      <Switch>
      <Route exact path='/'>
        <Home />
        
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
          </Route>
          <Route path={'/articals/:id'}>
            <Articals></Articals>
          </Route>
      </Switch >
      </BrowserRouter>
      
    </div>
  );
}

export default App;
