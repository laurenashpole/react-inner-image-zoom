import css from 'styled-jsx/css';

export default css`
  .main {
    width: 100%;
    padding: 1.5rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    .main {
      max-width: 768px;
      margin: 0 auto;
      padding: 3rem;
    }
  }
`;
