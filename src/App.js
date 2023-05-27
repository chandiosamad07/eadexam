import logo from './logo.svg';
import './App.css';
import TimerDisplay from './TaskB/TimerDisplay';
import PollDisplay from './TASKA/PollDisplay';
import UserParticipation from './TASKA/UserParticipation';
function App() {
  return (
    <>
    <PollDisplay Question="Poll Question: What is your favorite programming language?"  
    Answer= 'Answer Choices with Vote Counts:'/>
    
    <UserParticipation/>
     <TimerDisplay />
    <h1>Hello</h1>
    </>
  );
}

export default App;
