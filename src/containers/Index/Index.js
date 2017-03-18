import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import classNames from 'classnames';

import {Header} from '../../components'; 

import styles from './Index.scss';

export default class Index extends Component {
  static propTypes = {
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  goToCharacters() {
    this.props.router.push('/characters');
  }

  goToComics() {
    this.props.router.push('/comics');
  }

  render() {
    const {router} = this.props;

    const indexClassName = classNames(
      'container',
      styles.index
    );

    return (
      <div className={indexClassName}>
        <h1 className={styles.indexTitle}>
          Explore the Marvel Universe
        </h1>
        <div className={styles.indexButtons}>
          <Button
            bsStyle="primary"
            bsSize="large"
            className={styles.indexButton}
            onClick={this.goToComics.bind(this)}
          >
            Comics
          </Button>

          <Button
            bsStyle="primary"
            bsSize="large"
            className={styles.indexButton}
            onClick={this.goToCharacters.bind(this)}
          >
            Characters
          </Button>
        </div>
      </div>
    );


  }
}