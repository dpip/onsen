import React, { useState } from "react";

const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [state, setState] = useState({
    userName: "",
    date: "",
    checkedOne: "Service one: No",
    checkedTwo: "Service two: No",
    checkedThree: "Service three: No",
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
