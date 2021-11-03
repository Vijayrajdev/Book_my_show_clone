import { Route } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => <h1>Welcome to Home page!!!</h1>;
const Movie = () => <h1>Welcome to Movie page!!!</h1>;

const App = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/movies" exact component={Movie} />
    </>
  );
};

export default App;
