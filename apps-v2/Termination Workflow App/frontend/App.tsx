import "./tnetTheme.css";
import TerminationWizard from "./pages/TerminationWizard";
import { TNetMuiThemeProvider } from "./utils/tnetMuiTheme";

document.documentElement.classList.add("tnet-theme");

export default function App() {
  return (
    <TNetMuiThemeProvider>
      <TerminationWizard />
    </TNetMuiThemeProvider>
  );
}
