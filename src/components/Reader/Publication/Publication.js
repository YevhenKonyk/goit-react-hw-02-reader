import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

export default class Publication extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  render() {
    const { title, text } = this.props;
    return (
      <article className={styles.publication}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </article>
    );
  }
}
