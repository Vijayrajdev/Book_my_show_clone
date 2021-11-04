// import { Route } from "react-router-dom/cjs/react-router-dom.min";

// const Home = () => <h1>Welcome to Home page!!!</h1>;
// const Movie = () => <h1>Welcome to Movie page!!!</h1>;

//HOC
import DefaultHOC from "./HOC/DefaultHOC";

// Component
import Temp from "./components/Temp";

const App = () => {
  return (
    <>
      <DefaultHOC path="/" exact component={Temp} />
    </>
  );
};

export default App;
