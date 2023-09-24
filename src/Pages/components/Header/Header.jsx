import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <div>
            <nav className="flex items-center justify-between px-5 py-5 shadow-xl">
                <Logo></Logo>
                <ul className="flex text-xl font-semibold gap-6">
                    <li className="flex gap-5">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="flex gap-5">
                        <NavLink
                            to="/favorite"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >
                            Favorite
                        </NavLink>
                    </li>
                    <li className="flex gap-5">
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
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

export default Header;