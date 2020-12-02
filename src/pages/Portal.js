import React, { useContext } from "react";

import { AppContext } from "./../AppContext.js";
import { useHistory } from "react-router-dom";

import {
  Page,
  Toolbar,
  ToolbarButton,
  Icon,
  BackButton,
  List,
  ListItem,
} from "react-onsenui";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

const Portal = (props) => {
  const [state] = useContext(AppContext);
  const history = useHistory();

  const handleBack = (e) => {
    history.push({ pathname: "/" });
  };
  return (
    <Page>
      <Toolbar>
        <div className="left">
          <BackButton onClick={(e) => handleBack(e)}>Back</BackButton>
        </div>
        <div className="center">Your submission details</div>
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
      <List
        dataSource={[
          state.userName,
          state.date,
          state.checkedOne,
          state.checkedTwo,
          state.checkedThree,
          state.radio,
          state.selected,
        ]}
        renderRow={(row, idx) => <ListItem key={idx}>{row}</ListItem>}
      />
    </Page>
  );
};

export default Portal;
