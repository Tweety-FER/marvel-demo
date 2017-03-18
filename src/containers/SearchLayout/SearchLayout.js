import React, {Component, PropTypes} from 'react';
import {observable, action} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Grid, Row, Col} from 'react-bootstrap';
import classNames from 'classnames';

import {Header, Search} from '../../components'; 
import Message from './Message/Message';

import styles from './SearchLayout.scss';

@inject('keys')
@observer
export default class SearchLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    resultItem: PropTypes.func.isRequired,
    searchable: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
      isEmpty: PropTypes.bool.isRequired,
      items: PropTypes.object.isRequired,
      load: PropTypes.func.isRequired,
    }).isRequired,
    keys: PropTypes.object.isRequired,
  };

  defaultProps = {
    children: null,
  };

  @observable query = '';

  get results() {
    const {
      resultItem: ResultItem,
      searchable,
    } = this.props;

    if (searchable.isLoading) {
      return (
        <Message text="Loading..." />
      );
    }

    if (searchable.isEmpty) {
      return (
        <Message text="Nothing found." />
      );
    }

    const rows = [];
    searchable.items.forEach((item, index) => {
      if (index % 4 === 0) {
        rows.push([]);
      }

      rows[rows.length - 1].push(item);
    });

    return (
      <Grid>
        {
          rows.map((items, index) => (
            <Row key={index}>
              {
                items.map((item) => (
                  <Col md={3} key={item.id}>
                    <ResultItem
                      className={styles.searchItem}
                      item={item} 
                    />
                  </Col>
                ))
              }  
            </Row>
          ))
        }
      </Grid>
    )
  }

  componentDidMount() {
    this.load();
  }

  load(query) {
    this.props.searchable.load(this.props.keys.activeKeys, query);
  }

  @action search(query) {
    this.query = '';
    this.load(query);
  }

  triggerSearch(value) {
    this.props.searchable.load(this.query);
  }

  render() {
    const {
      children,
      keys,
    } = this.props;

    const containerClassName = classNames(
      styles.container
    );

    return (
      <div className={containerClassName}>
        <Header keys={keys} />
        <main className="container">
          <Search 
            query={this.query}
            search={this.search.bind(this)} 
          />
          <div className={styles.containerContent}>
            {children || null}
            {this.results}
          </div>
        </main>
      </div>
    );
  }
}
