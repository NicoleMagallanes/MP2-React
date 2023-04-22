import React from 'react';

function Header() {
    return (
        <><nav>
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
                    <li><a href="emailto:support@sp.domain"><i className="fa fa-envelope-o"></i> support@sp.domain</a></li>
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
                    <li><a href="order.html">Order</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">About us</a></li>
                    <li className="fixed_flex"><a href="signup.html" className="btn btn_1 chat_popup">Sign Up</a> <a href=""
                        className="btn btn_2 chat_popup">Order now</a> </li>
                </ul>
            </menu>
            <header className="flex">
                <section className="flex_content">
                    <article>
                        <h1 className="cursive big">
                            Carefully Crafted Recipe and broth for your Dog!<br />
                            <strong className="title">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get it <b>today!</b>
                            </strong>
                        </h1>
                    </article>
                </section>
                <section className="flex_content">
                    <figure>
                        <img src="https://i.ibb.co/xL9CZ66/MOBILE-VIEW-ORDERS.png" alt="" loading="lazy" />
                    </figure>
                    <figure>
                        <img src="https://i.ibb.co/sgm9mwv/Header-Right-1.png" alt="" />
                    </figure>
                    <aside className="tag fixed_flex">
                        <img
                            src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png"
                            alt=""
                        />
                        <strong>
                            <h6>Dog Food</h6>
                            <p>Order today</p>
                        </strong>
                    </aside>
                </section>
            </header>
        </>
    );
}

export default Header;