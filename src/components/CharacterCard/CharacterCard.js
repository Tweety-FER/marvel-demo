import React, {Component, PropTypes} from 'react';
import {toJS} from 'mobx';

import styles from './CharacterCard.scss';

export default class CharacterCard extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      thumbnail: PropTypes.shape({
        path: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired,
      }).isRequired,
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
        className={styles.characterCard}
        onClick={onClick}
      >
        <div className={styles.characterCardImageWrapper}>
          <img
            className={styles.characterCardImage} 
            src={this.imageUrl}
          />
        </div>
        <div className={styles.characterCardTitle}>
          {item.name}
        </div>
      </div>
    )
  }
}