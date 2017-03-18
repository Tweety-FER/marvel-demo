import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';

import Message from '../Message/Message';

import styles from './CharacterDetails.scss';

@observer
export default class CharacterDetails extends Component {
  static propTypes = {
    character: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      thumbnail: PropTypes.string,
      error: PropTypes.string,
    }).isRequired,
  };

  render() {
    const {character} = this.props;

    return (
      <section className={styles.character}>
        <img
          src={character.thumbnail}
          className={styles.characterImage}
        />
        {
          character.error
            ? (
              <Message
                isError
                text={character.error}
              />
            ) : (       
              <main className={styles.characterBody}>
                <h3 className={styles.characterTitle}>
                  {character.name}
                </h3>
                <section className={styles.characterDescription}>
                  {character.description}
                </section>
              </main>
            )
        }
      </section>
    );
  }
}