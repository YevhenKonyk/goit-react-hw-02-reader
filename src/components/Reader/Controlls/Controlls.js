import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controlls.module.css';

export default class Controls extends Component {
  static propTypes = {
    onPrevBtn: PropTypes.func.isRequired,
    onNextBtn: PropTypes.func.isRequired,
    itemsLength: PropTypes.number.isRequired,
    publicationIndex: PropTypes.number.isRequired,
  };

  render() {
    const { onPrevBtn, onNextBtn, itemsLength, publicationIndex } = this.props;

    return (
      <>
        <section className={styles.controlls}>
          <button
            className={styles.prev}
            type="button"
            onClick={onPrevBtn}
            disabled={publicationIndex <= 0}
          >
            Назад
          </button>
          <button
            className={styles.next}
            type="button"
            onClick={onNextBtn}
            disabled={publicationIndex >= itemsLength - 1}
          >
            Вперед
          </button>
        </section>
      </>
    );
  }
}
