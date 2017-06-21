import { API_URL, HEADERS } from './config';
import toJson from './utils';

export const getAlbum = id =>
  fetch(`${API_URL}albums/${id}`, HEADERS).then(toJson);

export const getAlbums = ids =>
  fetch(`${API_URL}albums/?ids=${ids}`, HEADERS).then(toJson);

export const getAlbumTracks = id =>
  fetch(`${API_URL}albums/${id}/tracks`, HEADERS).then(toJson);
