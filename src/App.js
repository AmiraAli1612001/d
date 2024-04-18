import { Outlet } from "react-router-dom";

import "./css/style.css"
import Nav from "./component/nav";
import Drawer from "./component/drawer";



function App() {
  return (
    <div className="App">
      <Nav/>
      <Outlet />
      
    </div>
  );
}

export default App;
