import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
    return (
        <div className="shadow-lg pt-4 px-3">
            <nav className="flex justify-between">
                <Logo></Logo>
                <ul className="flex gap-3">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-300 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorite"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-300 underline" : ""
                            }
                        >
                            Favorite
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-300 underline" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;