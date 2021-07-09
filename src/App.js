// import CityContainer from "./components/CityContainer";
import WeatherComponent from "./components/WeatherInfoContainer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  return (
    <Container>
      <AppLabel>Weather</AppLabel>
      <WeatherComponent />
    </Container>
  );
}

export default App;
