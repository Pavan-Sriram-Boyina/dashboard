import { React, useState } from "react";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import {
  FileTrigger,
  Switch,
  TextArea,
} from "@adobe/react-spectrum";

import { Button } from "@adobe/react-spectrum";
import {
  Item as NewItem,
  TabList,
  Tabs,
} from "@adobe/react-spectrum";
import { Picker, Item as DropItem } from "@adobe/react-spectrum";

import { Breadcrumbs, Item, TextField } from "@adobe/react-spectrum";
import "./airportDetails.css";
import {
  ActionButton,
  ButtonGroup,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Heading,
  Text as Text1,
} from "@adobe/react-spectrum";
const AirportDetails = ({ requiredDetails, setAirportDetails }) => {
  let [file, setFile] = useState(null);
  return (
    <div className="container">
      <Breadcrumbs>
        <Item key="home" onClick={() => setAirportDetails("")}>
          Home
        </Item>
        <Item key={requiredDetails.name}>{requiredDetails.name}</Item>
      </Breadcrumbs>
      <div>
        <h1>{requiredDetails.name}</h1>
      </div>
      <div className="divider-container">
        <Tabs>
          <TabList>
            <NewItem key="FoR">Terminals</NewItem>
            <NewItem key="MaR">Transport</NewItem>
            <NewItem key="Emp">Contact Details</NewItem>
          </TabList>
        </Tabs>
      </div>
      <div className="terminal-main">
        <div className="terminal-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
            alt="terminal-image"
            className="image"
          />
          <div>
            <div className="content">
              <h1>
                Terminal1{" "}
                <span className="short">
                  <TfiLayoutMenuSeparated />
                </span>
              </h1>
            </div>
            <p>Optional metadata</p>
          </div>
        </div>
        <div className="terminal-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
            alt="terminal-image"
            className="image"
          />
          <div>
            <div className="content">
              <h1>
                Terminal1{" "}
                <span className="short">
                  <TfiLayoutMenuSeparated />
                </span>
              </h1>
            </div>
            <p>Optional metadata</p>
          </div>
        </div>
        <div>
          <DialogTrigger>
            <ActionButton>Check connectivity</ActionButton>
            {(close) => (
              <Dialog>
                <Heading>Termination Title</Heading>

                <Divider />
                <Content>
                  <Text1>Start speed test?</Text1>
                </Content>
                <ButtonGroup>
                  <Button variant="secondary" onPress={close}>
                    Cancel
                  </Button>
                  <Button variant="accent" onPress={close}>
                    Continue
                  </Button>
                </ButtonGroup>
              </Dialog>
            )}
          </DialogTrigger>
        </div>
      </div>
      <h1 className="heading">Services</h1>
      <div>
        <h3 className="heading2">Lost & Found</h3>
      </div>

      <div className="service-container">
        <div className="section">
          <TextField label="Service Name" />
        </div>
        <div className="section">
          <Picker label="Choose frequency">
            <DropItem key="Option1">Option 1</DropItem>
            <DropItem key="Option2">Option 2</DropItem>
            <DropItem key="Option3">Option 3</DropItem>
          </Picker>
        </div>
        <div className="section">
          <Picker label="Sub Category">
            <DropItem key="Option1">Option 1</DropItem>
            <DropItem key="Option2">Option 2</DropItem>
            <DropItem key="Option3">Option 3</DropItem>
          </Picker>
        </div>
        <div className="section">
          <FileTrigger
            onSelect={(e) => {
              let files = Array.from(e);
              let filenames = files.map((file) => file.name);
              setFile(filenames);
            }}
          >
            <Button variant="accent">Upload a file</Button>
          </FileTrigger>
          {file && file}
        </div>
        <div className="section">
          <Switch>Show Image</Switch>
        </div>
      </div>
      <div className="section1">
        <TextArea label="Description" />
      </div>
      <div>
        <p className="paragraph">Lounge</p>
      </div>
      <div>
        <h3 className="heading2">Money Exchange</h3>
      </div>
    </div>
  );
};

export default AirportDetails;
