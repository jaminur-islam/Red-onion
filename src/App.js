import Nav from "./component/Header/Nav/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./component/Header/Banner/Banner";
import FoodSection from "./component/Main/FoodSection/FoodSection";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Breakfast from "./component/Main/Breakfast/Breakfast";
import Lunch from "./component/Main/Lunch/Lunch";
import Dinner from "./component/Main/Dinner/Dinner";

// App 
function App() {
  return (
    <div>
      <Router>
        <Nav> </Nav>
          <Banner></Banner>
        <FoodSection> </FoodSection>
        <div className='container'> 
        <Switch>
            <Route path='/breakfast'>
              <Breakfast></Breakfast>
            </Route>

            <Route path='/lunch'>
              <Lunch></Lunch>
            </Route>

            <Route path='/dinner'>
              <Dinner></Dinner>
            </Route>
        </Switch>
        </div>

      </Router>
       

        
    </div>
  );
}

export default App;
