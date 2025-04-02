import css from 'styled-jsx/css';

export default css`
  .redirect__overlay {
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .redirect__message {
    background: #fff;
    width: 100%;
    max-width: 440px;
    margin: 32px;
    padding: 48px 32px;
    border-radius: 2px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.15), 0px 6px 10px 0px rgba(0, 0, 0, 0.09),
      0px 1px 18px 0px rgba(0, 0, 0, 0.07);
    text-align: center;
  }

  .redirect__p {
    margin: 0;
  }

  .redirect__p:not(:last-of-type) {
    margin-bottom: 1.25rem;
  }
`;
