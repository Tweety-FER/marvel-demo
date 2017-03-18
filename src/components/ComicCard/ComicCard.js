import React, {Component, PropTypes} from 'react';
import {toJS} from 'mobx';

import styles from './ComicCard.scss';

export default class ComicCard extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  };

  get imageUrl() {
    const {thumbnail} = this.props.item;

    return `${thumbnail.path}.${thumbnail.extension}`;
  }

  render() {
    const {onClick, item} = this.props;

    return (
      <div 
        className={styles.comicCard}
        onClick={onClick}
      >
        <div className={styles.comicCardImageWrapper}>
          <img
            className={styles.comicCardImage} 
            src={item.thumbnail}
          />
        </div>
        <div className={styles.comicCardTitle}>
          {item.title}
        </div>
      </div>
    )
  }
}