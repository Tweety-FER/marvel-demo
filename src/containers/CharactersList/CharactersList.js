import React, {Component, PropTypes} from 'react';
import {observer, inject} from 'mobx-react';

import {CharacterCard} from '../../components';
import SearchLayout from '../SearchLayout/SearchLayout';

@inject('characters')
@observer
export default class CharactersList extends Component {
  static propTypes = {
    characters: PropTypes.object.isRequired,
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  onResultClick(id) {
    this.props.router.push(`/character/${id}`);
  }

  render() {
    return (
      <SearchLayout
        searchable={this.props.characters}
        resultItem={CharacterCard}
        onResultClick={this.onResultClick.bind(this)}
      />
    );
  }
}