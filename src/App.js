import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


// NavLink se agrega despues si se requiere.

import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';



/* Se declara de lo mas especifico a lo mas general si no no funciona / el index va abajo si no, usar exact:   
        <Route path="/" exact>
        index - ruta raiz
        </Route> 
*/

// activeClassName="active" para agregar la clase de bootstrap de active - solo funciona con NavLink.  

function App() {
  return (
    <Router>
    <div className="container mt-5">
      <div className="row"></div>
    <h1>navbar</h1>
 
  <Link to="/" className="btn btn-primary">Inicio</Link>
  <Link to="/nosotros" className="btn btn-primary">Nosotros</Link>
  <NavLink to="/contacto" className="btn btn-primary" activeClassName="active">Contacto</NavLink>

    <hr/>
    <Switch>
      <Route path="/" exact>
        <Inicio/>
      </Route>
      <Route path="/contacto">
      <Contacto/>
      </Route>
      <Route path="/nosotros">
      <Nosotros/>
      </Route>
    </Switch>
    </div>
    </Router>

  );
}

export default App;
