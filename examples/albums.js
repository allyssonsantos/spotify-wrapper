global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';


const spotify = new SpotifyWrapper({
  token: 'BQCaLI-QLCDpt6n0vhmUa85sjawMRULfAsWfpYG08wjLORrR1lL-4tb1ckzUwG_is7-3aicQkqi6jbOwe9ujaZe8Lcf3JoJX9uP0MvX6WrgKlKL_jlTg56eMN4lJt1bvjDjCIxPskD6B'
});
const albums = spotify.search.albums('Garage Fuzz');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
