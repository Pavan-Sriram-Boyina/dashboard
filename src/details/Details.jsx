import React from "react";
import { Button } from "@adobe/react-spectrum";
import { Text, Checkbox } from "@adobe/react-spectrum";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";

import "./details.css";

const airportDetails = [
  {
    name: "Indra Gandhi International Airport",
    country: "India",
    code: "Del",
    terminals: "3",
  },
  {
    name: "Dubai International Airport",
    country: "UAE",
    code: "DXB",
    terminals: "5",
  },
  { name: "Heathrow Airport", country: "England", code: "LHR", terminals: "6" },
  { name: "Istanbul Airport", country: "Turkey", code: "IST", terminals: "3" },
  {
    name: "Rajiv Gandhi International Airport",
    country: "Texas",
    code: "DFW",
    terminals: "14",
  },
];

const Details = ({ setAirportDetails }) => {
  return (
    <>
      <div className="details-holder">
        <div className="airports-list">
          <h3>Airports</h3>
          {/* @ts-ignore */}
          <Button variant="primary" staticColor="black" style="fill" >
            <Text>+ Add new</Text>
          </Button>
        </div>

        <table className="table-holder">
          <thead>
            <tr>
              <th className="table-head">
                <Checkbox className="checkbox">
                  <h4>All Airports</h4>
                </Checkbox>
              </th>
              <th>Country</th>
              <th>Code</th>
              <th>Terminals</th>
            </tr>
          </thead>
          <tbody>
            {airportDetails.map((item) => {
              return (
                <tr>
                  <td className="table-data" onClick={() => setAirportDetails(item)}>
                    <Checkbox className="checkbox">
                      <h5>{item.name}</h5>
                    </Checkbox>
                  </td>
                  <td>
                    <h5>{item.country}</h5>
                  </td>
                  <td>
                    <h5>{item.code}</h5>
                  </td>
                  <td>
                    <h5>{item.terminals}</h5>
                  </td>
                  <div>
                    <MdModeEditOutline className="icons" onClick={() => setAirportDetails(item)}/>
                    <RiDeleteBin6Fill className="icons" />
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Details;
