import React, { useState } from "react";
import styled from "styled-components";
import { addAncestorToDB } from "../network/requests";
import { Page } from "../App";

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
`;

function AddAncestorPage() {
  const [childId, setChildId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfDeath, setDateOfDeath] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [placeOfDeath, setPlaceOfDeath] = useState("");
  const [isImmigrant, setIsImmigrant] = useState(false);

  const onFormSubmit = () => {
    const id = lastName + Math.floor(Math.random() * Math.floor(2000));
    addAncestorToDB({
      [id]: {
        id,
        firstName,
        lastName,
        dateOfBirth,
        dateOfDeath,
        placeOfBirth,
        placeOfDeath,
        isImmigrant,
        childId,
        resources: {
          graveInfo: {},
          pictures: {},
          pdfs: {},
          proofOfTreeLocation: {},
        },
      },
    });
  };

  return (
    <Page>
      <h1>Add Ancestor</h1>
      <PersonDetailsForm
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit();
        }}
      >
        <input
          type="text"
          id="child_id"
          name="child_id"
          placeholder="Child ID"
          onChange={(e) => {
            setChildId(e.target.value);
          }}
        />
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Last name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <p>Date of birth</p>
        <input
          type="date"
          id="date_of_birth"
          name="date_of_birth"
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
        />
        <p>Date of death</p>
        <input
          type="date"
          id="date_of_death"
          name="date_of_death"
          onChange={(e) => {
            setDateOfDeath(e.target.value);
          }}
        />
        <input
          type="text"
          id="place_of_birth"
          name="place_of_birth"
          placeholder="Place of birth"
          onChange={(e) => {
            setPlaceOfBirth(e.target.value);
          }}
        />
        <input
          type="text"
          id="place_of_death"
          name="place_of_death"
          placeholder="Place of death"
          onChange={(e) => {
            setPlaceOfDeath(e.target.value);
          }}
        />
        <p>Is immigrant</p>
        <input
          type="checkbox"
          id="immigrant"
          name="immigrant"
          onChange={() => {
            setIsImmigrant(!isImmigrant);
          }}
        />
        <button type="submit">Submit</button>
      </PersonDetailsForm>
    </Page>
  );
}

export default AddAncestorPage;
