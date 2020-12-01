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
  BackButton,
} from "react-onsenui";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

const Home = (props) => {
  const history = useHistory();
  const [state, setState] = useContext(AppContext);
  console.log("logging props", state);

  const handleClick = () => {
    history.push({ pathname: "/portal", userData: state });
  };

  const isFormValid = () => {
    return state.userName && state.birthDate;
  };

  return (
    <Page>
      <Toolbar>
        <div className="left">{/* <BackButton>Back</BackButton> */}</div>
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
        <h4>Welcome! Tell us about yourself</h4>
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
          <p>What's your birthdate?</p>
          <Input
            id={"birthdate"}
            value={state.birthDate}
            float
            type={"date"}
            onChange={(event) => {
              setState({ ...state, birthDate: event.target.value });
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
                value={"one"}
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
                value={"two"}
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
                value={"three"}
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
              <option value="1">One day</option>
              <option value="2">Less than a week</option>
              <option value="3">More than a week</option>
            </Select>
          </div>
          <Button
            class={"submit-button"}
            onClick={handleClick}
            disabled={
              !state.userName ||
              !state.birthDate ||
              !state.radio ||
              !state.selected
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
