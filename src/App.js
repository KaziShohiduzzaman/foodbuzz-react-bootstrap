import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Meals from './components/Meals/Meals';
import Meal from './components/Meal/Meal';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/meals'>
          <Meals></Meals>
        </Route>
        <Route path='/meal/:mealId'>
          <MealDetails></MealDetails>
        </Route>
        <Route path='*'>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
