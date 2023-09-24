import { Outlet } from "react-router-dom";
import Header from "../Pages/components/Header/Header";

const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;