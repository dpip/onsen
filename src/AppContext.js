import React, { useState } from "react";

const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [state, setState] = useState({
    userName: "",
    birthDate: "",
    checkedOne: "Service one: ",
    checkedTwo: "Service two: ",
    checkedThree: "Service three: ",
    radio: "",
    selected: "1",
    errors: {
      userName: "",
      birthDate: "",
    },
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
