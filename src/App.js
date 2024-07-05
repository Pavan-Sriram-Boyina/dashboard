import "./App.css";
import Header from "./header/Header";
import SideNav from "./sidenav/SideNav";
import Details from "./details/Details";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import { useState } from "react";
import AirportDetails from "./airportDetails/AirportDetails";

function App() {
  const [airportDetails, setAirportDetails] = useState("");

  return (
    <Provider theme={defaultTheme}>
      <Header />
      <div className="holder">
        <SideNav />
        {airportDetails && airportDetails.name ? (
          <AirportDetails
            requiredDetails={airportDetails}
            setAirportDetails={setAirportDetails}
          />
        ) : (
          <Details setAirportDetails={setAirportDetails} />
        )}
      </div>
    </Provider>
  );
}

export default App;
