import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#086D9B",
      light: "#EBF8FE",
      dark: "#03293A",
    },
    secondary: {
      main: "#FA7921",
      light: "#FDCEAF",
      dark: "#773203",
    },
    text: {
      primary: "#000",
      secondary: "#FFF",
      disabled: "#EBEBE4",
    },
  },
})

export default theme
