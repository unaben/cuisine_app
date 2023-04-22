import Pages from "./pages/Pages";
import OptionsTab from "./components/OptionsTab";
import Search from "./components/Search";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Search />
      <OptionsTab />
      <Pages />
    </BrowserRouter>
  );
};

export default App;
