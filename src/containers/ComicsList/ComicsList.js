import React, {Component, PropTypes} from 'react';
import {observer, inject} from 'mobx-react';

import {ComicCard} from '../../components';
import SearchLayout from '../SearchLayout/SearchLayout';

@inject('comics')
@observer
export default class ComicsList extends Component {
  static propTypes = {
    comics: PropTypes.object.isRequired,
  };

  render() {
    return (
      <SearchLayout
        searchable={this.props.comics}
        resultItem={ComicCard}
      />
    );
  }
}