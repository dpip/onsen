import React, { useState } from "react";

const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [state, setState] = useState({
    userName: "",
    date: "",
    checkedOne: "false",
    checkedTwo: "false",
    checkedThree: "false",
    radio: "",
    selected: "",
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
