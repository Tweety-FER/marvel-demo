import React, {Component, PropTypes} from 'react';
import {observable, action} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Grid, Row, Col} from 'react-bootstrap';
import classNames from 'classnames';

import {Header} from '../../components'; 
import {Message} from './Message/Message';

import styles from './SearchLayout.scss';

@inject('keys')
@observer
export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    resultItem: PropTypes.node.isRequired,
    searchable: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
      isEmpty: PropTypes.bool.isRequired,
      items: PropTypes.array.isRequired,
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
    searchable.items.forEach((item) => {
      if (index % 4 === 0) {
        rows.push([]);
      }

      rows[rows.length - 1].push(item);
    });

    return (
      <Grid>
        {
          rows.map((items) => (
            <Row>
              {
                items.map((Item) => {
                  <Col md={3}>
                    <ResultItem
                      className={styles.searchItem}
                      item={item} 
                    />
                  </Col>
                })
              }  
            </Row>
          ))
        }
      </Grid>
    )
  }

  componentDidMount() {
    this.props.searchable.load();
  }

  @action onQueryChange(value) {
    this.query = value;
    this.props.searchable.load(this.query);
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
      'container',
      styles.container
    );

    return (
      <div className={containerClassName}>
        <Header keys={keys} />
          <Search 
            query={search.query}
            onQueryChange={this.onQueryChange.bind(this)} 
          />
        }
        <div className={styles.containerContent}>
          {children}
          {this.results}
        </div>
      </div>
    );
  }
}
