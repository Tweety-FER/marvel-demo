import React, {Component, PropTypes} from 'react';

import styles from './CharacterCard.scss';

export default class CharacterCard extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  };

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
            src={item.thumbnail}
          />
        </div>
        <div className={styles.characterCardTitle}>
          {item.name}
        </div>
      </div>
    )
  }
}