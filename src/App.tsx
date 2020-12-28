import React, { useState } from 'react';
import styled from 'styled-components'
import {putAncestorInfo} from './network/requests'

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateOfDeath, setDateOfDeath] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [placeOfDeath, setPlaceOfDeath] = useState('');
  const [isImmigrant, setIsImmigrant] = useState(false);

  const onFormSubmit = () => {
    console.log('onFormSubmit');
    putAncestorInfo({firstName, lastName, dateOfBirth, dateOfDeath, placeOfBirth, placeOfDeath, isImmigrant})
  }

  return (
    <div>
      <AppHeader>
        Family History
      </AppHeader>
      <Page>
        <PersonDetailsForm onSubmit={(e)=>{e.preventDefault(); onFormSubmit();}}>
          <input type="text" id="first_name" name="first_name" placeholder="First name" required
          onChange={(e)=>{setFirstName(e.target.value)}}/>
          <input type="text" id="last_name" name="last_name" placeholder="Last name" required
            onChange={(e)=>{setLastName(e.target.value)}}/>
          <p>Date of birth</p>
          <input type="date" id="date_of_birth" name="date_of_birth" required
            onChange={(e)=>{setDateOfBirth(e.target.value)}} />
          <p>Date of death</p>
          <input type="date" id="date_of_death" name="date_of_death" required
          onChange={(e)=>{setDateOfDeath(e.target.value)}} />
          <input type="text" id="place_of_birth" name="place_of_birth" placeholder="Place of birth" required
          onChange={(e)=>{setPlaceOfBirth(e.target.value)}} />
          <input type="text" id="place_of_death" name="place_of_death" placeholder="Place of death" required
          onChange={(e)=>{setPlaceOfDeath(e.target.value)}} />
          <p>Is immigrant</p><input type="checkbox" id="immigrant" name="immigrant"
          onChange={()=>{setIsImmigrant(!isImmigrant)}}/>
          <button type="submit" >Submit</button>
        </PersonDetailsForm>
      </Page>
    </div>
  );
}

export default App;
