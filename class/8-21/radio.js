function randomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Radio {
  constructor(stations = []){
    this.stations = [...stations];
    // for deep copy
    // this.stations = JSON.parse(JSON.stringify(stations));
  }

  changeStation(){
    this.station = this.stations[randomInt(0, this.stations.length - 1)];
    const song = this.station.songs[randomInt(0, this.station.songs.length - 1)];
    console.log(`Now playing ${song.title} by ${song.artist} on ${this.station.name}`)
  }
}

class Station {
  constructor(name, songs = []){
    this.name = name;
    this.songs = [...songs];
  }
}

class Song {
  constructor(title = 'Hey Jude', artist = 'The Beatles'){
    this.title = title;
    this.artist = artist;
  }
}
