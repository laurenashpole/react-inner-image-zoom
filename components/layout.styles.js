import css from 'styled-jsx/css';

export default css`
  .main {
    width: 100%;
    padding: 0.8rem;
    flex-grow: 1;
  }

  @media (min-width: 768px) {
    .main {
      max-width: 1164px;
      margin: 0 auto;
      padding: 4rem 1.6rem;
    }
  }
`;
