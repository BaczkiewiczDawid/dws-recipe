import Dashboard from 'views/dashboard/Dashboard';
import NewRecipe from 'views/NewRecipe/NewRecipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/new-recipe">
          <NewRecipe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
