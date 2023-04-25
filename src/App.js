import logo from './logo.svg';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './Header.css';
import { handleScroll } from './App';
const Doggo = () => {
  return (
    <>
      <head>
        <title>DOGGO</title>
        <link rel="shortcut icon" href="assets/pawicon.png" />
        <meta charSet="UTF-8" />
        <meta name="language" content="ES" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Dancing+Script:wght@400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/a1e09c300f.js" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <link rel="stylesheet" href="assets/css/main.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <script type="text/javascript" src="Main.js"></script>
      </head>
      <Header/>
      <Footer/>
      
    </>
  );
};

export default Doggo;
