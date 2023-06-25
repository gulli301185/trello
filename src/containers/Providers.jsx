import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import { Provider } from "react-redux";
import Theme from "../theme";
import { CssBaseline } from "@mui/material";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <CssBaseline />
          {children}
        </Theme>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
