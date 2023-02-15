import './App.css';
import { theme } from './component/commonLink/theme'
import { ThemeProvider } from "@material-ui/styles";
import Index from './component/Index';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Index />
    </ThemeProvider>
    </>
  );
}

export default App;
