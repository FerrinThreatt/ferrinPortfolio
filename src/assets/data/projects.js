import { v4 as uuidv4 } from 'uuid';
import NowPlayingImg from '../images/now-playing.JPG';
import PlaylistVisual from '../images/playlistvisual.jpg';
import CurrencyConverterImg from '../images/currencyconverter.png';
// import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Now Playing',
    desc:
      'An app made using the spotify API to track what song I am currently playing.',
    img: NowPlayingImg,
  },
  {
    id: uuidv4(),
    name: 'Playlist Visualization',
    desc:
      'A simple web scraping program that displays what I have been playing in a collage format.',
    img: PlaylistVisual,
  },
  {
    id: uuidv4(),
    name: 'Currency Converter',
    desc:
      'With this app you can convert any currency of your choice back and forth',
    img: CurrencyConverterImg,
  },
  // {
  //   id: uuidv4(),
  //   name: 'HeartBeat',
  //   desc:
  //     'An app made during Google SPS, that gives you a workout playlist based on bpm.',
  //   img: CavinImg,
  // },
];

export default projects;
