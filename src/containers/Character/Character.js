import React, {Component, PropTypes} from 'react';
import {observer, inject} from 'mobx-react';

import {ComicCard, CharacterDetails} from '../../components';
import SearchLayout from '../SearchLayout/SearchLayout';

@inject('characterDetails')
@inject('keys')
@observer
export default class Character extends Component {
  static propTypes = {
    characterDetails: PropTypes.object.isRequired,
    keys: PropTypes.object.isRequired,
    params: PropTypes.shape({
      characterId: PropTypes.string.isRequired,
    }).isRequired,
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  onResultClick(id) {
    this.props.router.push(`/comic/${id}`);
  }

  componentWillMount() {
    const {characterDetails, keys, params} = this.props;
    characterDetails.reset();
    characterDetails.load(params.characterId, keys.activeKeys);
  }

  render() {
    return (
      <SearchLayout
        searchable={this.props.characterDetails.comics}
        resultItem={ComicCard}
        onResultClick={this.onResultClick.bind(this)}
      >
        <CharacterDetails character={this.props.characterDetails} />
      </SearchLayout>
    );
  }
}