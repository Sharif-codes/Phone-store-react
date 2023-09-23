import { Link } from "react-router-dom";




const ErrorPage = () => {
    
    return (
        <div className="flex h-screen items-center justify-center ">
            <div>
                <h1>No page found!!</h1>
                <Link to="/"> <button className="text-white bg-green-500 p-2 rounded-xl" >Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;