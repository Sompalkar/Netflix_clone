import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Nav() {
    const [show, handleShow] = useState(false);

    const history = useHistory();

    useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {

                handleShow(true);

            } else handleShow(false);

        });


    }, []);

    return (
        <div className={`nav ${show && "nav-black"}`}>


            <div class="nav-contents">

                <img
                    onClick={() => history.push("/")}
                    className='nav-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png'
                    alt='Netflix Logo' />


                <img
                    onClick={() => history.push("/profile")} className='nav-avatar' src='https://th.bing.com/th/id/OIP.kGXc4O38ZF2wXmesqSupjwHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                    alt='Netflix Logo' />





            </div>


        </div>
    )
}

export default Nav