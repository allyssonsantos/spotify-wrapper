import API_URL from './config';
import toJson from './utils';

export const getAlbum = id =>
  fetch(`${API_URL}albums/${id}`).then(toJson);

export const getAlbums = ids =>
  fetch(`${API_URL}albums/?ids=${ids}`).then(toJson);

export const getAlbumTracks = id =>
  fetch(`${API_URL}albums/${id}/tracks`).then(toJson);
