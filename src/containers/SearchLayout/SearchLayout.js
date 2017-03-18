import React, {Component, PropTypes} from 'react';
import {observer, inject} from 'mobx-react';
import {Grid, Row, Col} from 'react-bootstrap';
import classNames from 'classnames';

import {Header, Message, Search} from '../../components'; 

import styles from './SearchLayout.scss';

@inject('keys')
@observer
export default class SearchLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    resultItem: PropTypes.func.isRequired,
    onResultClick: PropTypes.func.isRequired,
    searchable: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
      isEmpty: PropTypes.bool.isRequired,
      items: PropTypes.object.isRequired,
      load: PropTypes.func.isRequired,
      error: PropTypes.string,
    }).isRequired,
    keys: PropTypes.object.isRequired,
  };

  defaultProps = {
    children: null,
  };

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

    if (searchable.error) {
      return (
        <Message
          isError
          text={searchable.error}
        />
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
                      onClick={this.props.onResultClick.bind(null, item.id)}
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

  onSearch(query) {
    this.load(query);
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
          <Search onSearch={this.onSearch.bind(this)} 
          />
          <div className={styles.containerContent}>
            {children || null}
            {this.results}
          </div>
        </main>
        <footer className={styles.containerFooter}>
          <a href="http://marvel.com">Data provided by Marvel. © 2017 MARVEL</a>
        </footer>
      </div>
    );
  }
}
