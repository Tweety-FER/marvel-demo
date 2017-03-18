import React, {Component, PropTypes} from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap';

import styles from './Search.scss';

@observer
export default class Search extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  @observable query = '';

  @action onQueryChange(event) {
    this.query = event.target.value;
  }

  @action onSubmit(event) {
    event.preventDefault();

    this.props.onSearch(this.query);
    this.query = '';
  }

  render() {
    return (
      <div className={styles.search}>
        <Form inline onSubmit={this.onSubmit.bind(this)}>
          <FormGroup controlId="search">
            <FormControl
              type="search"
              placeholder="Search the Marvel Universe"
              value={this.query}
              onChange={this.onQueryChange.bind(this)}
            />  
          </FormGroup>
          <Button 
            type="submit"
            className={styles.searchButton}
          >
            Search
          </Button>
        </Form>
      </div>
    );
  }
}