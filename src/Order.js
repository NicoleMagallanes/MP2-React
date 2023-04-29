import React from 'react';

function Products() {
    return (
        <>
            <section id="royal_canin"></section>
            <div className="container" style={{ marginTop: '60px' }}>
                <img src="https://i.ibb.co/1GPwPpt/Royal-Canin-Logo-svg.png" alt="Product Logo" width="160" height="70" />
                <div className="row">
                    <div className="col-md-3">
                        {/* Product Card */}
                        <div className="product-card">
                            <h3>Royal Canin Milk for Puppies</h3>
                            <img src="https://i.ibb.co/zfqH6nR/2013-reproduction-babydog-milk-400g.png" alt="Product Image" />
                            <p>
                                Complete milk replacer feed for puppies from birth to weaning. (from 1 to 10 kg) and her puppies
                            </p>
                            <span className="price">₱450.00</span>
                            <a href="https://checkout.chec.io/KluWZq" data-chec-product-id="KluWZq" id="buy-now">
                                Buy now
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        {/* Product Card */}
                        <div className="product-card">
                            <h3>Royal Canin MiniStarter for Puppies</h3>
                            <img src="https://i.ibb.co/G9xGVN3/packshot-starter-mini-shn17.png" alt="Product Image" />
                            <p>
                                Complete feed for dogs - For the small breed female dog (from 1 to 10 kg) and her puppies
                            </p>
                            <span className="price">₱300.00</span>
                            <a href="https://checkout.chec.io/iGeD6B" data-chec-product-id="iGeD6B">
                                Buy now
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        {/* Product Card */}
                        <div className="product-card">
                            <h3>Royal Canin MiniStarter for Puppies</h3>
                            <img src="https://i.ibb.co/G9xGVN3/packshot-starter-mini-shn17.png" alt="Product Image" />
                            <p>
                                Complete feed for dogs - For the small breed female dog (from 1 to 10 kg) and her puppies
                            </p>
                            <span className="price">₱300.00</span>
                            <a href="https://checkout.chec.io/iGeD6B" data-chec-product-id="iGeD6B">
                                Buy now
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        {/* Product Card */}
                        <div className="product-card">
                            <h3>Royal Canin MiniStarter for Puppies</h3>
                            <img src="https://i.ibb.co/G9xGVN3/packshot-starter-mini-shn17.png" alt="Product Image" />
                            <p>
                                Complete feed for dogs - For the small breed female dog (from 1 to 10 kg) and her puppies
                            </p>
                            <span className="price">₱300.00</span>
                            <a href="https://checkout.chec.io/iGeD6B" data-chec-product-id="iGeD6B">
                                Buy now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    function SideBarCart() {
        const cartShow = () => {
            // implement cartShow function here
        };

        const cartHide = () => {
            // implement cartHide function here
        };

        return (
            <body className="spaces">
                <div id="chec-basket" className="animated" onClick={cartShow}>
                    <span className="cart-icon">
                        <img src="https://i.ibb.co/4jM369V/shopping-cart-set-of-shopping-cart-icon-on-white-background-shopping-cart-icon-shopping-cart-design.jpg" width="23" alt="Cart Icon" />
                    </span>
                    <span className="items" data-chec="cart-items">
                        0 Items
                    </span>
                    <span className="subtotal" data-chec="cart-subtotal">
                        $0.00
                    </span>
                    <a className="view-cart mobile-only" href="javascript:cartShow()">
                        View Cart
                    </a>
                </div>
                <section id="shopping-cart">
                    <aside id="cart-overview" className="inactive">
                        <div className="shopping-cart-wrap">
                            <a className="hide-cart mobile-only" href="javascript:cartHide()">
                                Close Cart
                            </a>
                            <h3 className="shopping-cart-title">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
                            </h3>
                            <ul className="line-items">
                                <li className="empty">Cart is empty!</li>
                            </ul>
                            <div className="subtotal">
                                <h4>Subtotal</h4>
                                <span>-</span>
                            </div>
                            <div className="closing">
                                <a className="go-to-checkout" href="javascript:Spaces.goToCheckout()">
                                    <i className="fa fa-lock"></i>
                                    <b>Secure</b> Checkout
                                </a>
                                <small className="secure">
                                    All transactions are safe &amp; secured by 2048 bit SSL encryption.
                                </small>
                            </div>
                        </div>
                        <div id="spaces-inline-checkout"></div>
                        <hr className="hologram-bar close" />
                    </aside>
                    <div id="cart-active-overlay" onClick={cartHide}></div>
                </section>
            </body>
        );
    }
}
    export default Products;