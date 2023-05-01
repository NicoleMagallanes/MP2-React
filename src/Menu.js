import React from "react";
import { Link } from 'react-router-dom';
const navigation = [
    { name: 'Order', href: '/Order' }
];
function Menu() {
    return (
        <>
            <nav>
                <section className="flex_content">
                    <a href="index.html"><img src="https://i.ibb.co/6Ry23nX/DOGGO-2.png" alt="Logo" /></a>
                </section>
                <section className="flex_content">
                    <a href="javascript:void(0)" className="ham"><i className="fa fa-bars"></i></a>
                </section>
            </nav>
            <menu id="menu">
                <a href="javascript:void(0)" className="close"><i className="fa fa-times"></i></a>
                <section className="flex_content">
                    <a href="index.html"><img src="https://i.ibb.co/kmyW81G/DOGGO-3.png" /></a>
                </section>
                <br />
                <ul>
                    <li><a href="#" target="_blank"><i className="fa fa-map-o"></i> 753 Gaffney Rd Fairbanks, AK 99701</a></li>
                    <li><a href="emailto:support@doggo.ph"><i className="fa fa-envelope-o"></i> support@sp.domain</a></li>
                    <li><a href="tel:1234567890"><i className="fa fa-headphones"></i> 123-456-7890</a></li>
                </ul>
                <br />
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li className="dropdown">
                        <a href="javascript:void(0)">Categories</a>
                        <aside>
                            <a href="categories.html">Brands</a>
                            <a href="#">Category two</a>
                            <a href="#">Category three</a>
                            <a href="#">Category four</a>
                        </aside>
                    </li>
                    <li><Link to="/order"> Order</Link></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">About us</a></li>
                    <li className="fixed_flex"><a href="signup.html" className="btn btn_1 chat_popup">Sign Up</a> <a href=""
                        className="btn btn_2 chat_popup">Order now</a> </li>
                </ul>
            </menu>
        </>
    );
}

export default Menu;