import logo from './logo.svg';
import './App.css';
import mainContainer from './containers/mainContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {


  return (
    <Router>
    <>
    <Route path="/" component={mainContainer} />
    {/* <Route path="/about " */}
    </>
    </Router>
  );
}

export default App;
