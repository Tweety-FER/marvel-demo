import React, {Component, PropTypes} from 'react';
import {observer, inject} from 'mobx-react';

import {CharacterCard, ComicDetails} from '../../components';
import SearchLayout from '../SearchLayout/SearchLayout';

@inject('comicDetails')
@inject('keys')
@observer
export default class Comic extends Component {
  static propTypes = {
    comicDetails: PropTypes.object.isRequired,
    keys: PropTypes.object.isRequired,
    params: PropTypes.shape({
      comicId: PropTypes.string.isRequired,
    }).isRequired,
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  onResultClick(id) {
    this.props.router.push(`/character/${id}`);
  }

  componentWillMount() {
    const {comicDetails, keys, params} = this.props;
    comicDetails.reset();
    comicDetails.load(params.comicId, keys.activeKeys);
  }

  render() {
    return (
      <SearchLayout
        searchable={this.props.comicDetails.characters}
        resultItem={CharacterCard}
        onResultClick={this.onResultClick.bind(this)}
      >
        <ComicDetails comic={this.props.comicDetails} />
      </SearchLayout>
    );
  }
}