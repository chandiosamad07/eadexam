import React from 'react'
import AnotherUserParticipation from './AnotherUserParticipation'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function UserParticipation() {
    const navigate = useNavigate()
  return (
    <>
    <h1>├──UserParticipation Component</h1>
    <p>
    │   └── Answer Choices:
        <br/>
          <label>
            │       ├── JavaScript
            <input type="radio" name="myRadio" value="option1" />
          </label>
          <br/>
          <label>
            │       ├── Python
            <input type="radio" name="myRadio" value="option2" />
          </label>
          <br/>
          <label>
            │       ├── Java
            <input type="radio" name="myRadio" value="option3" />
          </label>
          <br/>
          <label>
            │       └── C#
            <input type="radio" name="myRadio" value="option3" />
          </label>
         
          <button onClick={()=> navigate('/Thank')} >submit</button>
       
        </p>
     
    </>
  )
}

export default UserParticipation
