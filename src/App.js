import React from "react";
import SnackbarProvider from "react-simple-snackbar";

import Flow from "./pages/FlowBuilder/index";

import "./styles.css";

export default function App() {
  return (
    <div>
      <SnackbarProvider>
        <Flow />
      </SnackbarProvider>
    </div>
  );
}
