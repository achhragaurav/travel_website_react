import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { useGlobalContext } from "./store/Context";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Error from "../src/pages/Error";
import getLocalStorage from "./components/LoginComp/hooks/getLocalStorage";
import useFetchData from "./components/LoginComp/hooks/useFetchData";

function App() {
  const { isLoggedIn, loginData, setIsLoggedIn, setLoginData } =
    useGlobalContext();

  const fetchData = useFetchData();

  useEffect(() => {
    getLocalStorage().then((data) => {
      if (!data) {
        return;
      }

      const internalData = JSON.parse(data);

      if (internalData.uid) {
        setIsLoggedIn(true);
        fetchData(internalData.uid).then((data) => {
          setLoginData(data);
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">{!isLoggedIn ? <Login /> : <Error />}</Route>
          <Route path="/collection">
            {isLoggedIn ? <Collection loginData={loginData} /> : <Error />}
          </Route>
          <Route path="/profile">
            {isLoggedIn ? <Profile loginData={loginData} /> : <Error />}
          </Route>
          <Route path="/cart">
            {isLoggedIn ? <Cart loginData={loginData} /> : <Error />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
