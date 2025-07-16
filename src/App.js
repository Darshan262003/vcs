import Letter from "./newz";
import Message from "./new";
import Unordered from "./order";
import TodoList from "./todo";
import ProductCata from "./check";
import TodoList1 from "./present";

import "./myapp.css";
import Weather from "./weather";
import "./motivation.css";
import Carinfo from "./car";
import Countries from "./country";
import Restaurant from "./restaurant";
import UserCard from "./pro";
import Land from "./land";
import Msg from "./classexample";
import Validation from "./validate";
import Newsletter from "./form";
import UserStatusSwitcher from "./form2";
import Op from "./Event1";
import Op1 from "./count";
import FeedbackPoll from "./Feedbackpoll";
import ExpenseTrackerInput1 from "./Expense";
function App()
{
  return(
    <div className="App">
       <Letter/>
       <Message/>
       <Unordered/>
       <TodoList/>
       <ProductCata/>
       <TodoList1/>
        <Weather/>  
        <Carinfo/>
        <Countries/>  
        <Restaurant/> 
        <UserCard name={"darshan"} age={21}/>
       <Land/>
       <Msg name={"MSRIT"} year={2025}/>
       <Validation />
       <Newsletter/>
       <UserStatusSwitcher/>
       <Op/>
       <Op1/>
       <FeedbackPoll/>
       <ExpenseTrackerInput1/>
    </div>

  );
}
export default App;
