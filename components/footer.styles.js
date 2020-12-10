import css from 'styled-jsx/css';

export default css`
  .footer {
    background: #f2f3f7;
    margin-top: 2rem;
    padding: 1rem 0.8rem;
    text-align: right;
    position: relative;
  }

  .footer:before {
    content: " ";
    background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cstyle%3E.st0%7Bfill:none;stroke:%23e7e8eB;stroke-miterlimit:10%7D%3C/style%3E%3Cpath class='st0' d='M9.5 20h21M20 30.5v-21'/%3E%3C/svg%3E");
    background-size: 31px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2.25rem;
    z-index: -1;
  }

  .footer__link {
    display: inline-flex;
    align-items: center;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.075em;
    text-transform: uppercase;
    text-decoration: none;
  }

  .footer__link span {
    margin-right: 0.95rem;
    border-right: 1px solid #cb4e01;
    padding: 0.25rem 1rem 0.25rem 0;
  }

  .footer__link:hover span {
    border-color: #b64600;
  }

  .footer__link svg {
    width: 65px;
    height: 30px;
  }

  @media (min-width: 768px) {
    .footer {
      margin-top: 2rem;
      padding: 1.6rem;
    }

    .footer:before {
      left: calc(1.6rem - 8px);
      bottom: 3.15rem;
      background-position: top left
    }

    .footer__links {
      max-width: 1100px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    .footer {
      margin-top: 5rem;
    }

    .footer:before {
      bottom: 4.15rem;
    }
  }

  @media (min-width: 1164px) {
    .footer:before {
      left: calc((100% - (1116px + 1.6rem)) / 2);
    }
  }
`;
