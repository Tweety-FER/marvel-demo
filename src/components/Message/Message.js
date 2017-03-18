import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import styles from './Message.scss';

export default class Message extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    isError: PropTypes.bool,
  };

  render() {
    const messageClassName = classNames(
      styles.message,
      this.props.className,
      {
        [styles.error]: this.props.isError,
      }
    );

    console.log(messageClassName);

    return (
      <div className={messageClassName}>
        <div className={styles.messageText}>
          {this.props.text}
        </div>
      </div>
    );
  }
}