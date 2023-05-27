import React,{ useState } from "react"


function PollDisplay(props) {
    const [countjs, setCountjs] = useState(0)
    const [countp, setCountp] = useState(0)
    const [countc, setCountc] = useState(0)
    const [countj, setCountj] = useState(0)
  return (
    <div>
      <h1> Polling App</h1>
        <p>{props.Question} 
        <br/>
         {props.Answer}
         <br/>

         │       ├── JavaScript: {countjs} votes
         <br/>

         │       ├── Python: {countp} votes
         <br/>
         │       ├── Java: {countj} votes
         <br/>
         │       └── C#: {countc} votes
         <br/>

         </p>
        
    </div>
  )
}

export default PollDisplay
