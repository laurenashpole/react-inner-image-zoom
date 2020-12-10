import css from 'styled-jsx/css';

export default css`
  .product {
    padding: 0.2rem 0.2rem 0 0.2rem;
  }

  .product__details {
    text-align: center;
  }

  .product__details h2 {
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 1.4rem;
  }

  .product__price {
    margin: -0.5rem 0 1.8rem 0;
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 900;
    letter-spacing: 0.025em;
  }

  .product__btn {
    background: #cb4e01;
    width: 100%;
    margin-bottom: 0.8rem;
    border-radius: 2px;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 3rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.075em;
    display: inline-block;
  }

  .product__btn:hover,
  .product__btn:focus {
    background: #b64600;
    color: #fff;
  }

  .product__list {
    margin: 0;
    border-top: 1px solid #d9dade;
    padding: 1.6rem 0 0 0;
    list-style: none;
    text-align: left;
  }

  .product__list li + li {
    margin-top: 10px;
  }

  .product__list li:first-child {
    font-size: 0.8rem;
    font-weight: 900;
    line-height: 1.25rem;
    letter-spacing: 0.075em;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    .product {
      padding: 0;
      display: flex;
      align-items: center;
    }

    .product__img {
      width: 50%;
      flex-shrink: 0;
    }

    .product__details {
      padding-left: 5%;
      font-size: 0.95rem;
      text-align: left;
    }

    .product__details h2 {
      margin-top: 0;
    }

    .product__btn {
      width: auto;
      margin-bottom: 2rem;
      padding: 0 2.25rem;
    }

    .product__list {
      border-top: none;
      padding-top: 0;
    }
  }

  @media (min-width: 1024px) {
    .product {
      padding: 2rem 2rem 0 2rem;
    }

    .product__details {
      padding-left: 7.5%;
      font-size: 1rem;
    }

    .product__details h2 {
      font-size: 2rem;
    }
  }
`;
