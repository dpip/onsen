import React, { useContext } from "react";
import { AppContext } from "./../AppContext.js";

import { useHistory } from "react-router-dom";

import {
  Page,
  Card,
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Toolbar,
  ToolbarButton,
  Icon,
} from "react-onsenui";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

const Home = (props) => {
  const history = useHistory();
  const [state, setState] = useContext(AppContext);

  const handleClick = (e) => {
    history.push({ pathname: "/portal" });
  };

  return (
    <Page class={"home-page"}>
      <Toolbar>
        <div className="left" />
        <div className="center">Enter your information</div>
        <div className="right">
          <ToolbarButton>
            <Icon icon="md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Card class={"login-card"}>
        <h2>Your information</h2>
        <p>What's your name?</p>
        <form id={"userinformation"}>
          <Input
            id={"username"}
            value={state.userName}
            float
            type="text"
            onChange={(event) => {
              setState({ ...state, userName: event.target.value });
            }}
            modifier="material"
            placeholder="Your name"
          />
          <p>What's your starting date?</p>
          <Input
            id={"date"}
            value={state.date}
            float
            type={"date"}
            onChange={(event) => {
              setState({ ...state, date: event.target.value });
            }}
            modifier="material"
          />
          <div className={"check-group"}>
            <p>Would you like to add services?</p>
            <label>
              <Checkbox
                className={"checkbox"}
                onChange={(event) => {
                  setState({
                    ...state,
                    checkedOne: `${
                      event.target.value + ": " + event.target.checked
                    }`,
                  });
                }}
                value={"Service one"}
                modifier="material"
              />
              &nbsp;Service One
            </label>
            <label>
              <Checkbox
                className={"checkbox"}
                onChange={(event) => {
                  setState({
                    ...state,
                    checkedTwo: `${
                      event.target.value + ": " + event.target.checked
                    }`,
                  });
                }}
                value={"Service two"}
                modifier="material"
              />
              &nbsp;Service Two
            </label>
            <label>
              <Checkbox
                className={"checkbox"}
                onChange={(event) => {
                  setState({
                    ...state,
                    checkedThree: `${
                      event.target.value + ": " + event.target.checked
                    }`,
                  });
                }}
                value={"Service three"}
                modifier="material"
              />
              &nbsp;Service Three
            </label>
          </div>
          <div className={"radio-group"}>
            <p>How did you hear about us?</p>
            <label>
              <Radio
                className={"radio"}
                onChange={(event) => {
                  setState({ ...state, radio: event.target.value });
                }}
                modifier="material"
                value={"Internet"}
                name={"r-selector"}
              />
              &nbsp; Internet
            </label>
            <label>
              <Radio
                className={"radio"}
                onChange={(event) => {
                  setState({ ...state, radio: event.target.value });
                }}
                modifier="material"
                value={"Word of mouth"}
                name={"r-selector"}
              />
              &nbsp; Word of mouth
            </label>
            <label>
              <Radio
                className={"radio"}
                onChange={(event) => {
                  setState({ ...state, radio: event.target.value });
                }}
                modifier="material"
                value={"Other"}
                name={"r-selector"}
              />
              &nbsp; Other
            </label>
          </div>
          <div>
            <p>How long will you plan on staying?</p>
            <Select
              modifier="material"
              onChange={(event) =>
                setState({ ...state, selected: event.target.value })
              }
            >
              <option disabled>Select an option</option>
              <option value="One day">One day</option>
              <option value="Two days">Less than a week</option>
              <option value="Three days">More than a week</option>
            </Select>
          </div>
          <Button
            class={"submit-button"}
            onClick={(e) => handleClick(e)}
            disabled={
              !state.userName || !state.date || !state.radio || !state.selected
            }
          >
            Submit
          </Button>
        </form>
      </Card>
    </Page>
  );
};

export default Home;
