class Radio {
  constructor(stations = []){
    this.stations = stations;
  }

  changeStation(){
    this.station = this.stations[Math.floor(Math.random() * this.stations.length)]
    const song = this.station.songs[Math.floor(Math.random() * this.station.songs.length)]
    console.log(`Now playing ${song.title} by ${song.artist} on ${this.station.name}`)
  }
}

class Station {
  constructor(name, songs = []){
    this.name = name;
    this.songs = songs;
  }
}

class Song {
  constructor(title, artist){
    this.title = title;
    this.artist = artist;
  }
}

const radio = new Radio([
  new Station('Pop', [
    new Song('Shape of You', 'Ed Sheeran'),
    new Song('Despacito', 'Luis Fonsi')
  ]),
  new Station('Rock', [
    new Song('Bohemian Rhapsody', 'Queen'),
    new Song('Stairway to Heaven', 'Led Zeppelin')
  ]),
  new Station('Jazz', [
    new Song('Take Five', 'Dave Brubeck'),
    new Song('So What', 'Miles Davis')
  ])
]);

for (let i = 0; i < 5; i++){
  radio.changeStation();
}
