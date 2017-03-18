import React, {Component, PropTypes} from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap';

import styles from './Search.scss';

@observer
export default class Search extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    search: PropTypes.func.isRequired,
  };

  @observable query = this.props.query;

  @action onQueryChange(event) {
    this.query = event.target.value;
  }

  render() {
    const {search} = this.props;
    
    return (
      <div className={styles.search}>
        <Form inline onSubmit={search}>
          <FormGroup controlId="search">
            <FormControl
              type="search"
              placeholder="Search the Marvel Universe"
              value={this.query}
              onChange={this.onQueryChange}
            />  
          </FormGroup>
          <Button className={styles.searchButton}>
            Search
          </Button>
        </Form>
      </div>
    );
  }
}