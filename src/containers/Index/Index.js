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

  render() {
    const {router} = this.props;

    const indexClassName = classNames(
      'container',
      styles.index
    );

    return (
      <div className={indexClassName}>
        <div className={styles.indexButtons}>

        </div>
      </div>
    );


  }
}