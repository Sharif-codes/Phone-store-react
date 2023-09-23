import { useLoaderData } from "react-router-dom";
import Phones from "../../components/Phones/Phones";
import Banner from "../../components/header/Banner/Banner";


const Home = () => {
    const phones= useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;