import React from "react";
import styled from "styled-components";
import perfectDay from "./icons/perfect-day.svg";

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;
const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const Location = styled.span`
  font-size: 28px;
`;
const WeatherInfoLabel = styled.span`
  font-size: 14px;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = () => {
  return (
    <InfoContainer>
      <InfoIcon />
      <InfoLabel></InfoLabel>
    </InfoContainer>
  );
};

const WeatherContainer = () => {
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>30 C | </span> Cloudy
        </Condition>
        <WeatherLogo src={perfectDay} />
      </WeatherCondition>
      <Location>London GB</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent />
        <WeatherInfoComponent />
        <WeatherInfoComponent />
        <WeatherInfoComponent />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherContainer;
