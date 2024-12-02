import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


const MainLayout = () => {
    return (
        <Container className=" min-h-screen flex flex-col ">
            <Header/>
            <div className="flex-1 mt-4">
                <Outlet />
            </div>
            <Footer />
        </Container>
    );
};

export default MainLayout;