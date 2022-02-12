import './App.css';


import {NavMenu} from './Components/NavMenu';
import {Home} from './Components/Home';
import {Search} from './Components/Search';
import {Movie1,Movie2,Movie3,Movie4} from './Components/Movie';
import {Cast1,Cast2,Cast3,Cast4,Cast5,Cast6,Cast7,Cast8} from './Components/Cast';
import {WatchMovie} from './Components/WatchMovie';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       Single Page Application Exercise
     </h3>

     <NavMenu/>
     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/search' component={Search}/>
       <Route path='/movie1' component={Movie1}/>
       <Route path='/movie2' component={Movie2}/>
       <Route path='/movie3' component={Movie3}/>
       <Route path='/movie4' component={Movie4}/>
       <Route path='/cast1' component={Cast1}/>
       <Route path='/cast2' component={Cast2}/>
       <Route path='/cast3' component={Cast3}/>
       <Route path='/cast4' component={Cast4}/>
       <Route path='/cast5' component={Cast5}/>
       <Route path='/cast6' component={Cast6}/>
       <Route path='/cast7' component={Cast7}/>
       <Route path='/cast8' component={Cast8}/>
       <Route path='/wm' component={WatchMovie}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
