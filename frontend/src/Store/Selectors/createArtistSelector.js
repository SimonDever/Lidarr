import _ from 'lodash';
import { createSelector } from 'reselect';
import createAllArtistSelector from './createAllArtistSelector';

function createArtistSelector() {
  return createSelector(
    (state, { artistId }) => artistId,
    createAllArtistSelector(),
    (artistId, artist) => {
      return _.find(artist, { id: artistId });
    }
  );
}

export default createArtistSelector;
