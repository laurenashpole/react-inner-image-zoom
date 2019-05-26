import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Demo extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showCode: false
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showCode: !prevState.showCode
    }));
  }

  render () {
    const {
      name,
      children,
      notes,
      code
    } = this.props;

    return(
      <div className="demo">
        <div className="demo__main">
          <h3 className="demo__heading">{name}</h3>

          <div className="demo__content">
            <div className="demo__example">{children}</div>

            <div className="demo__notes">
              <h4 className="demo__notes-heading">Notes:</h4>
              <ul className="demo__notes-list">
                {notes.map((note, i) => {
                  return(
                    <li key={i} dangerouslySetInnerHTML={{__html: note}}></li>
                  );
                })}
              </ul>
              <a
                href="javascript:void(0);"
                className="demo__code-btn"
                onClick={this.handleClick}
              >
                {this.state.showCode ? 'Hide Code -' : 'Show Code +'}
              </a>
            </div>
          </div>
        </div>

        {this.state.showCode &&
          <pre className="demo__code">
            <code>{code}</code>
          </pre>
        }
      </div>
    );
  }
}

Demo.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element,
  notes: PropTypes.array,
  code: PropTypes.string
};

export default Demo;