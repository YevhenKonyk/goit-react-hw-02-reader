import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),
  };

  state = {
    publicationIndex: 0,
  };

  handlePrevBtn = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - 1,
    }));
  };

  handleNextBtn = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const { title, text } = items[this.state.publicationIndex];

    return (
      // Разметка компонента <Reader>
      <div className={Styles.reader}>
        {/* Разметка компонента <Controls> */}
        <section>
          <button
            type="button"
            onClick={this.handlePrevBtn}
            disabled={publicationIndex <= 0}
          >
            Назад
          </button>
          <button
            type="button"
            onClick={this.handleNextBtn}
            disabled={publicationIndex >= items.length - 1}
          >
            Вперед
          </button>
        </section>

        {/* Разметка компонента <Progress> */}
        <p>
          {publicationIndex + 1}/{items.length}
        </p>

        {/* Разметка компонента <Publication> */}
        <article>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      </div>
    );
  }
}
