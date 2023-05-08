import logo from './logo.svg';
import Footer from './Footer';
import Header from './Header';
import './Header.css';
import { handleScroll } from './App';
import Menu from './Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from './Order'
import { Dropdown, Navbar } from 'reactstrap';
import Commerce from '@chec/commerce.js';
import React, { useState, useEffect } from 'react';
import commerce from './lib/commerce';
import ProductsList from './components/ProductsList';
import Brand from './Brands';

const App1 = () => {
  const [products, setProducts] = useState([]);

  // Because React rendering can be triggered for many different reasons, 
  // it is best practice to wrap our commerce object method calls into a 
  // useEffect() hook. This hook acts as the replacment to componentWillMount() 
  // function when using class components. By leaving the second argument array 
  // empty, this method will run once before the initial render.
  useEffect(() => {
    fetchProducts();
  }, []);

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }
  const [product, setProduct] = useState([]);
  useEffect(() => {
    commerce.products.list().then(result => {
      setProduct(result.data.map(product => product));
    });
  }, []);


  console.log('Commerce Product: ', ProductsList);
  const [cart, setCart] = useState()
  useEffect(() => {
    commerce.cart.retrieve()
        .then(res => {
            setCart(res)
        })
},[])
  return (
    <div className="productlist">
      <ProductsList
        products={products}
      />
    </div>
  );
};

function App() {
  return (
    < Navbar >
      <Routes>
        <Route path='../order' element={<Order />} />
        <Route path='../brands' element={<Brand />} />
      </Routes>
    </Navbar>
  );
}

const Doggo = () => {
  return (
    <>
      
      <Menu />
      <Header />
      <main>
        {/*division_1*/}
        <div className="divisions division_1 flex">
          <section className="flex_content">
            <figure>
              <img src="https://i.ibb.co/r4z6xk7/Delivery.png" alt="" loading="lazy" />
            </figure>
          </section>
          <section className="flex_content padding_2x">
            <em className="cursive">How to order?</em>
            <h2 className="title big">Get it easy</h2>
            <span className="bar"></span>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            </p>
            <ul className="flex">
              <li className="fixed_flex">
                <figure>
                  <img src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png" alt="" />
                </figure>
                <aside>
                  <h5>Pick your Fav!</h5>
                  <p>Choose your Pet's favourite meal</p>
                </aside>
              </li>
              <li className="fixed_flex">
                <figure>
                  <img src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png" alt="" />
                </figure>
                <aside>
                  <h5>Delivery time</h5>
                  <p>Choose your pickup time</p>
                </aside>
              </li>
              <li className="fixed_flex">
                <figure>
                  <img src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png" alt="" />
                </figure>
                <aside>
                  <h5>Pay securely</h5>
                  <p>Make a secure payment</p>
                </aside>
              </li>
              <li className="fixed_flex">
                <figure>
                  <img src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png" alt="" />
                </figure>
                <aside>
                  <h5>Enjoy our meal</h5>
                  <p>Have a delicious &amp; fresh meal for your Dog.</p>
                </aside>
              </li>
            </ul>
          </section>
        </div>
        {/*-Placeholder Youtube Video*/}
        <div style={{ textAlign: 'center' }}>
          <iframe width="420" height="345" src="https://www.youtube.com/embed/SF0-xhaLXNI?autoplay=1&mute=1" style={{ border: '2px solid black', margin: '20px auto' }}></iframe>
          <iframe width="420" height="345" src="https://www.youtube.com/embed/VI8eRC4wPpk?autoplay=1&mute=1" style={{ border: '2px solid black', margin: '20px auto' }}></iframe>
        </div>
      </main>
      <Footer />

    </>
  );
};

export default Doggo;
