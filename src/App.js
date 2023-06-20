import React from "react";
import { SnackbarProvider } from "notistack";
import Flow from "./pages/FlowBuilder/index";

import "./styles.css";

export default function App() {
  return (
    <div>
      <SnackbarProvider maxSnack={1} autoHideDuration={3000}>
        <Flow />
      </SnackbarProvider>
    </div>
  );
}
