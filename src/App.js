import logo from './logo.svg';
import './App.css';
import TimerDisplay from './TaskB/TimerDisplay';
import PollDisplay from './TASKA/PollDisplay';
function App() {
  return (
    <>
    <PollDisplay Question="Poll Question: What is your favorite programming language?"  Answer= 'Answer Choices with Vote Counts:'
    ></PollDisplay>
    
     <TimerDisplay />
    <h1>Hello</h1>
    </>
  );
}

export default App;
