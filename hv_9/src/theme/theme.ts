import { createTheme } from "@mui/material/styles";
 
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // основний колір
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#f5f5f5", // фон сторінки
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h4: { fontSize: "1.5rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
  },
  spacing: 8, // базова одиниця у пікселях (за замовчуванням вже 8)
  shape: {
    borderRadius: 8, // скруглення кутів для всіх компонентів
  },
 
  components: {
    // Кнопка — завжди без великих літер
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 600,
        },
      },
      defaultProps: {
        disableElevation: true, // без тіні за замовчуванням
      },
    },
    // AppBar — завжди білий
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#333333",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});
 
export default theme;