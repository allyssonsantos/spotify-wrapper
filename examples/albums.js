global.fetch = require('node-fetch');

import { searchAlbums } from '../src/main';

const albums = searchAlbums('Garage Fuzz');

albums.then(data => data.albums.items.map(item => console.log(item.name)));