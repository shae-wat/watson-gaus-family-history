import React from 'react';
import styled from 'styled-components'

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Page = styled.section`
  min-height: 90vh;
  padding: 24px 16px;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
`

const PersonDetailsForm = styled.form`
  display: flex;
  flex-direction: column;
  > input {
    height: 32px;
    font-size: 24px;
    margin-bottom: 16px;
  }
  > button {
    background-color: #282c34;
    color: white;
    height: 50px;
    font-size: 24px;
    margin-top: 48px;
  }
`

function App() {
  return (
    <div>
      <AppHeader>
        Family History
      </AppHeader>
      <Page>
        <PersonDetailsForm onSubmit={(e)=>{e.preventDefault(); console.log('form submitted')}}>
          <input type="text" id="first_name" name="first_name" placeholder="First name" required/>
          <input type="text" id="last_name" name="last_name" placeholder="Last name" required/>
          <input type="text" id="date_of_birth" name="date_of_birth" placeholder="Date of birth"required/>
          <input type="text" id="date_of_death" name="date_of_death" placeholder="Date of death"required/>
          <input type="text" id="place_of_birth" name="place_of_birth" placeholder="Place of birth"required/>
          <input type="text" id="place_of_death" name="place_of_death" placeholder="Place of death"required/>
          <p>Is immigrant</p><input type="checkbox" id="immigrant" name="immigrant" />
          <button type="submit" >Submit</button>
        </PersonDetailsForm>
      </Page>
    </div>
  );
}

export default App;
