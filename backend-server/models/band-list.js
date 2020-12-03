const Band = require('./band')

class BandList{
  constructor(){
    this.bands = [
      new Band('Metallica'),
      new Band('Heroes del silencio'),
      new Band('Bon Jovi'),
      new Band('Pink Floyd'),
    ]
  }

  addBand(name){
    const newBand = new Band(name)
    this.bands.push(newBand)
  }

  removeBand(id){
    this.bands = this.bands.filter(band => band.id !== id);
  }

  getBands(){
    return this.bands
  }

  increaseVotes(id){
    this.bands = this.bands.map( band => {
      if (band.id === id){
        band.vote += 1
      }
      console.log(band)
      return band
    })
  }

  changeName(id, newName){
    this.bands = this.bands.map( band => {
      if (band.id === id){
        band.name = newName
      }
      return band
    })
  }

}

module.exports = BandList