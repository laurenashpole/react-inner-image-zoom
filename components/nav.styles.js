import css from 'styled-jsx/css';

export default css`
  .nav {
    position: relative;
  }

  .nav__list {
    margin: 0;
    padding: 0.8rem 0.2rem;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.6rem;
    letter-spacing: 0.075em;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .nav__list--primary {
    background: #f2f3f7;
    font-weight: 900;
    text-transform: uppercase;
  }

  .nav__item {
    padding: 0 0.6rem;
  }

  .nav__item--left {
    width: 100%;
    font-weight: 400;
    text-transform: none;
    position: absolute;
    top: 0.8rem;
    left: 0;
    text-align: center;
  }

  .nav__item--left h1 {
    font-size: inherit;
    font-weight: inherit;
    display: inline;
  }

  .nav__item--left .nav__link:before {
    visibility: visible;
    opacity: 1;
  }

  .nav__link {
    color: #373737;
    text-decoration: none;
    display: inline-block;
    position: relative;
    z-index: 0;
  }

  .nav__link:before {
    content: "+";
    margin-right: 0.35rem;
    color: #727292;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.125s linear, opacity 0.125s linear;
  }

  .nav__link--active:before,
  .nav__link:hover:before {
    visibility: visible;
    opacity: 1;
  }

  .nav__link:hover,
  .nav__link:focus {
    color: #222;
  }

  .nav__list--secondary {
    padding-top: 3rem;
  }

  .nav__list--secondary .nav__link {
    color: #cb4e01;
  }

  .nav__list--secondary .nav__link:before {
    color: #cb4e01;
  }

  .nav__list--secondary .nav__link:hover,
  .nav__list--secondary .nav__link:focus {
    color: #cb4e01;
  }

  @media (min-width: 768px) {
    .nav {
      background-image: linear-gradient(90deg, transparent 50%, #f2f3f7 50%);
      background-repeat: no-repeat;
      background-position: 0 100%;
      background-size: 100% 50%;
      padding: 0 1.6rem;
    }

    .nav__list {
      max-width: 1100px;
      margin: 0 auto;
      padding: 1rem 0 1rem 1.6rem;
      justify-content: flex-end;
    }

    .nav__list--primary {
      border-radius: 2px;
    }

    .nav__item {
      padding: 0 0 0 2rem;
    }

    .nav__item--left {
      width: auto;
      margin-right: auto;
      padding: 0;
      font-weight: 900;
      text-transform: uppercase;
      position: static;
    }

    .nav__item--left .nav__link:before {
      visibility: hidden;
      opacity: 0;
    }

    .nav__item--left .nav__link:hover:before,
    .nav__item--left .nav__link--active:before {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (min-width: 1024px) {
    .nav__list {
      padding: 1.2rem 0 1.2rem 1.6rem;
    }

    .nav__item {
      padding-left: 3rem;
    }

    .nav__item--left {
      padding-left: 0;
    }
  }
`;
