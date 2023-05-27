import React from 'react'

function UserParticipation() {
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
        </p>
    </>
  )
}

export default UserParticipation
