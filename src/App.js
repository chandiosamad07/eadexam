import logo from './logo.svg';
import './App.css';
import TimerDisplay from './TaskB/TimerDisplay';
import PollDisplay from './TASKA/PollDisplay';
import UserParticipation from './TASKA/UserParticipation';
import { Routes ,Route } from 'react-router-dom';
import ThankUMessage from './TASKA/ThankUMessage';
function App() {
  return (
    <>

    <Routes>
      <Route path ='/' element = {<PollDisplay Question="Poll Question: What is your favorite programming language?"  
       Answer= 'Answer Choices with Vote Counts:'/>}></Route>
       <Route path ='user' element = {<UserParticipation />}></Route>
       <Route path = 'Thank' element = {<ThankUMessage/>}></Route>  
    </Routes> 
   
    {/* <UserParticipation/> */}
    {/*  <TimerDisplay />
    <h1>Hello</h1> */}
    </>
  );
}

export default App;
