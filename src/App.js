import Nav from "./component/Header/Nav/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./component/Header/Banner/Banner";
import FoodSection from "./component/Main/FoodSection/FoodSection";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Login from "./component/Login/Login";
import ContextProvider from "./context/ContextProvider";
import SignUp from "./component/SignUP/SignUp";

// App 
function App() {
  return (
  <ContextProvider>  

     <Router> 
        <Switch> 
            
            <Route path='/home'>
                 <Nav> </Nav>
                    <Banner></Banner>
                 <FoodSection> </FoodSection>
            </Route>

            <Route exact path='/'>
                 <Nav> </Nav>
                    <Banner></Banner>
                 <FoodSection> </FoodSection>
            </Route>

            <Route path='/login'>
              <Login> </Login>
            </Route>

            <Route path='/signup'>
              <SignUp> </SignUp>
            </Route>

        </Switch>
     </Router>


 </ContextProvider>
       
           
  );
}

export default App;
