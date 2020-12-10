import css from 'styled-jsx/css';

export default css`
  .demo {
    padding-top: 1.5rem;
    overflow: hidden;
  }

  .demo__main {
    background-image:
      linear-gradient(#f2f3f7, #f2f3f7),
      linear-gradient(transparent 1.5rem, #f2f3f7 1.5rem),
      linear-gradient(#f2f3f7, #f2f3f7);
    background-size:
      2rem calc((100vw - 1.8rem) * 0.666),
      calc(100% - 4rem) calc((100vw - 1.8rem) * 0.666),
      2rem calc((100vw - 1.8rem) * 0.666);
    background-position: 0 0, 2rem 0, 100% 0;
    background-repeat: no-repeat;
    padding: 0 1rem 1rem 1rem;
  }

  .demo__heading {
    width: 100%;
    margin: 0;
    padding: 0 1.5em;
    color: #9697ae;
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 0.075em;
    text-transform: uppercase;
    text-align: center;
    line-height: 3rem;
    transform: translateY(-1.5rem);
  }

  .demo__notes-heading {
    margin: 1rem 0;
    font-family: 'Frank Ruhl Libre', serif;
    letter-spacing: 0.025em;
  }

  .demo__notes-list {
    padding: 0 0 1rem 1rem;
    font-size: 0.950rem;
  }

  .demo__notes-list li + li {
    margin-top: 0.5rem;
  }

  .demo__code-btn {
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    appearance: none;
    color: #cb4e01;
    font-family: 'Mada', 'Helvetica', 'Arial', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.075em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
  }

  .demo__code-btn:hover,
  .demo__code-btn:focus {
    color: #b64600;
    text-decoration: underline;
  }

  .demo__code {
    background: #fff;
    margin: 1rem;
    padding: 1.5em;
    border: 1px solid #d5d5df;
    border-radius: 1px;
    color: #4b4b4b;
    line-height: 1.4em;
    overflow-x: auto;
    position: relative;
  }

  .demo__code-copy {
    background: #fff;
    border-left: 1px solid #d5d5df;
    border-bottom: 1px solid #d5d5df;
    padding: 0.25rem 0.75rem;
    color: #9697ae;
    font-size: 0.6rem;
    font-weight: 700;
    position: absolute;
    top: 0;
    right: 0;
    transition: background 0.1s linear, color 0.1s linear, border-color 0.1s linear;
  }

  .demo__code-copy:hover,
  .demo__code-copy:focus {
    background: #727292;
    border-color: #727292;
    color: #fff;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .demo__main {
      background-size:
        2rem calc((100vw - 5.6rem) * 0.666),
        17rem calc((100vw - 5.6rem) * 0.666),
        calc(100% - 19rem) calc((100vw - 5.6rem) * 0.666);
      background-position: 0 0, 2rem 0, 19rem 0;
      padding: 0 2rem 2rem 2rem;
    }

    .demo__heading {
      width: 17rem;
      margin-bottom: 1rem;
      padding: 0 1.75rem;
      text-align: left;
    }
  }

  @media (min-width: 900px) {
    .demo {
      padding-top: 2em;
    }

    .demo__main {
      background-size:
        2rem calc(100% - 4rem),
        17rem calc(100% - 4rem),
        calc(100% - 19rem) calc(100% - 4rem);
    }

    .demo__content {
      display: flex;
    }

    .demo__example {
      width: 75%;
      padding-right: 2em;
    }

    .demo__notes {
      width: 25%;
      padding-bottom: 6rem;
      position: relative;
    }

    .demo__notes-heading {
      margin-top: 1.5rem;
    }

    .demo__notes-list {
      padding-bottom: 1rem;
    }

    .demo__code-btn {
      position: absolute;
      left: 0;
      bottom: 4rem;
    }

    .demo__code {
      margin: 1rem 2rem;
      padding: 2rem;
    }

    .demo__code-copy {
      left: auto;
      bottom: auto;
    }
  }
`;
