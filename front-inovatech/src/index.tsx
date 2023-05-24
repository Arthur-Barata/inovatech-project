import App from "./App";

import { GlobalStyles, ThemeProvider, Typography } from "@mui/material";
import ReactDOM from "react-dom/client";
import { globalStyle, theme } from "./styles/global-styles";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles styles={globalStyle} />
    <Typography component={"div"}>
      <App />
    </Typography>
  </ThemeProvider>
);
