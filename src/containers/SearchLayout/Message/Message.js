import React, {Component, PropTypes} from 'react';

import styles from './Message.scss';

export default class Message extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={styles.message}>
        <div className={styles.messageText}>
          {this.props.text}
        </div>
      </div>
    );
  }
}