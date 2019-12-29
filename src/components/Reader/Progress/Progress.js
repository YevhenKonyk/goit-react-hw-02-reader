import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Progress.module.css';

export default class Progress extends Component {
  static propTypes = {
    publicationIndex: PropTypes.number.isRequired,
    itemsLength: PropTypes.number.isRequired,
  };

  render() {
    const { publicationIndex, itemsLength } = this.props;
    return (
      <div className={styles.progress}>
        <p className={styles.text}>
          {publicationIndex + 1}/{itemsLength}
        </p>
      </div>
    );
  }
}
