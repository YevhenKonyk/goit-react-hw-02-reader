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
      <>
        <p className={styles.progress}>
          {publicationIndex + 1}/{itemsLength}
        </p>
      </>
    );
  }
}
