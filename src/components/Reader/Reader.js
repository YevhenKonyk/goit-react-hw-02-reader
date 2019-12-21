import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controlls from './Controlls';
import Progress from './Progress';
import Publication from './Publication';
import styles from './Reader.module.css';

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
    const itemsLength = items.length;
    const { publicationIndex } = this.state;
    const { title, text } = items[this.state.publicationIndex];

    return (
      // Разметка компонента <Reader>
      <div className={styles.reader}>
        {/* Разметка компонента <Controls>  */}
        <Controlls
          onPrevBtn={this.handlePrevBtn}
          onNextBtn={this.handleNextBtn}
          itemsLength={itemsLength}
          publicationIndex={publicationIndex}
        />
        {/* Разметка компонента <Progress> */}
        <Progress
          itemsLength={itemsLength}
          publicationIndex={publicationIndex}
        />
        {/* Разметка компонента <Publication> */}
        <Publication title={title} text={text} />
      </div>
    );
  }
}
