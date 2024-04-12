import { Outlet,Link  } from "react-router-dom";
import './App.css';

//plantilla principal de la app
const Layout = () =>{
    return(
        <div className="app">
            <h1><Link to ="/">Netflix</Link></h1>
            <Outlet/>
        </div>
    )
};
export default Layout;