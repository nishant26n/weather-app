import React from "react";
import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 0.5px;
  border-radius: 2px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
  }
  & button {
    padding: 10px;
    font-size: 14px;
    color: black;
    background-color: #8fc8ff;
    border: none;
    outline: none;
    cursor: pointer;
    transition-duration: 0.2s;
  }
  & button:hover {
    background-color: #4faafe;
  }
`;

const CityContainer = () => {
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLabel>Find weather of your city</ChooseCityLabel>
      <SearchBox>
        <input placeholder="City" />
        <button>Search</button>
      </SearchBox>
    </>
  );
};

export default CityContainer;
