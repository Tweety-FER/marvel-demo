import React, {Component, PropTypes} from 'react';
import {observer, inject} from 'mobx-react';

import {ComicCard} from '../../components';
import SearchLayout from '../SearchLayout/SearchLayout';

@inject('comics')
@observer
export default class ComicsList extends Component {
  static propTypes = {
    comics: PropTypes.object.isRequired,
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  onResultClick(id) {
    this.props.router.push(`/comic/${id}`);
  }

  render() {
    return (
      <SearchLayout
        searchable={this.props.comics}
        resultItem={ComicCard}
        onResultClick={this.onResultClick.bind(this)}
      />
    );
  }
}