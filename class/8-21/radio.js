const radio = {};

radio.stations = [
  {
    name: 'BBC Radio 1',
    songs: [
      {
	title: 'Rockstar',
	artist: 'DaBaby',
      },
    ],
  },
  {
    name: 'BBC Radio 2',
    songs: [
      {
	title: 'Rockstar',
	artist: 'DaBaby',
      },
    ],
  },
  {
    name: 'BBC Radio 3',
    songs: [
      {
	title: 'Hallelujah',
	artist: 'Leonard Cohen',
      },
    ],
    
  },
];

radio.changeStation = function(){
  this.station = this.stations[Math.floor(Math.random() * this.stations.length)]
  const song = this.station.songs[Math.floor(Math.random() * this.station.songs.length)]
  console.log(`Now playing ${song.title} by ${song.artist} on ${this.station.name}`)
}
