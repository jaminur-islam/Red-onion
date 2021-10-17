import { Tab , Tabs } from "react-bootstrap";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import Lunch from "../Lunch/Lunch";

const FoodSection = () => {
  return (
    <div className='container'>
    <Tabs defaultActiveKey="Breakfast" id="uncontrolled-tab-example" className="mb-3">

    <Tab eventKey="Breakfast" title="Breakfast">
       <Breakfast> </Breakfast>
      </Tab>
      
      <Tab eventKey="Lunch" title="Lunch">
      <Lunch> </Lunch>
      </Tab>

     <Tab eventKey="Dinner" title="Dinner">
       <Dinner> </Dinner>
     </Tab>

   
</Tabs>
    </div>
  );
};

export default FoodSection;