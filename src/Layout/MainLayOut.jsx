import { Outlet } from "react-router-dom";
import Nav from "../components/header/navbar/Nav";


const MainLayOut = () => {
    return (
        <div className="container mx-auto ">

        
        <Nav></Nav>
       <Outlet ></Outlet>
       </div>
    );
};

export default MainLayOut;