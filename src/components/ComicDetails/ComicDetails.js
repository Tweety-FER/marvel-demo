import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';

import styles from './ComicDetails.scss';

@observer
export default class ComicDetails extends Component {
  static propTypes = {
    comic: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      thumbnail: PropTypes.string,
    }).isRequired,
  };

  render() {
    const {comic} = this.props;

    return (
      <section className={styles.comic}>
        <img
          src={comic.thumbnail}
          className={styles.comicImage}
        />
        <main className={styles.comicBody}>
          <h3 className={styles.comicTitle}>
            {comic.title}
          </h3>
          <section className={styles.comicDescription}>
            {comic.description}
          </section>
        </main>
      </section>
    );
  }
}