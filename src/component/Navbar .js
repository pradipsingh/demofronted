import React from "react";
import {useNavigate} from 'react-router-dom'
import {
    Nav,
    NavLink
} from 'react-bootstrap'
const Navbar = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        return navigate("/Home");
    }
    const goToNewUser = () => {
        return  navigate("/User");
    };

    return (
        <>
            <Nav style={{padding: '10px 10px 10px 41px'}}>
                <NavLink
                    onClick={goToHome}
                    activeStyle={{ color: 'black' }}
                    style={{padding: '15px'}}
                >
                    Home
                </NavLink>
                <NavLink
                    onClick={goToNewUser}
                    activeStyle={{ color: 'black' }}
                >
                    New Order
                </NavLink>


            </Nav>
        </>
    );
};
export default Navbar;