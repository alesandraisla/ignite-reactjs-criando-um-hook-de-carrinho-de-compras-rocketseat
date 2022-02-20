import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .product-item {
      padding: 10px;
      width: 228px;
      height: 402px;
      flex-wrap: wrap;
    }

    #product-item-img {
    max-width: 182px;
    }

    .product-item > strong {
      font-size: 12px;
    }
  }

  @media (max-width: 425px) {
    #list-of-products{
    grid-template-columns: repeat(2,1fr);
    align-content: center;
    justify-content: center;
    }

    #list-of-products li {
      padding-top: 0px;
      padding-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
      height: 320px;
      width: 190px;
    }

    .product-item {
      padding-left: 10px;
      padding-right: 10px;
    }

    #product-item-img {
      max-width: 150px;
    }

    .product-item li > strong {
      font-size: 11px;

    .product-item li > span {
    font-size: 14px;
      }

    }

    #items-header {
      align-content: flex-start;
      justify-content: center;

      a {
        margin-bottom: 10px;
      }

    }

    #cart-products td img {
      height: 60px;
    }

    #container-of-cart {
      padding-left: 1px;
      padding-right: 1px;
      height: 560px;
      width: 470px;
    }

    #cart-products > strong, #cart-products > span {
      font-size: 10px;
    }  

    #container-of-card tbody td {
    padding: 0;
    }
  }

  @media (max-width: 375px) {
    #list-of-products{
    grid-template-columns: repeat(1,1fr);
    align-content: center;
    justify-content: center;
    justify-items: center;
    }

    #items-header {
      align-content: flex-start;
      justify-content: center;
      a {
        margin-bottom: 10px;
      }
    }

    #cart-products tbody td {
      padding: 2px;
    }

    #container-of-cart {
      width: 403px;
    }

    #footer-cart {
        padding-left: 20px;
        padding-right: 20px;
    }
  }

  @media (max-width: 320px) {
    #items-header {
      align-content: flex-start;
      justify-content: center;
      margin-bottom: 25px;
      margin-top: 25px;
      a {
        margin-bottom: 10px;
      }
    }
  }
`;
