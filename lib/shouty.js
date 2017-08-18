class Shouty {
  constructor() {
    this.locationsByShouter = new Map()
    this.messagesByShouter = new Map()
      this.toneByShouter = new Map()
  }

  setLocation(person, coordinate) {
    this.locationsByShouter.set(person, coordinate)
  }

  saySomething(person, message, tone) {
    this.messagesByShouter.set(person, message)
      this.toneByShouter.set(person, tone)
  }

  getMessagesHeardBy(listener) {
    const messagesHeard = new Map()

    for (const [shouter, message] of this.messagesByShouter) {
      const shouterLocation = this.locationsByShouter.get(shouter)
      const listenerLocation = this.locationsByShouter.get(listener)
        const shouterTone = this.toneByShouter.get(shouter)

        let messageRange;
        if(shouterTone === 'whisper'){
          messageRange = 10;
        }
        else if(shouterTone === 'megaphones'){
          messageRange = 5000;
        }
        else{
          messageRange = 1000;
        }



        console.log(shouterLocation.distanceFrom(listenerLocation))

      if (shouterLocation.distanceFrom(listenerLocation) < messageRange) {
        messagesHeard.set(shouter, message)
      }
    }

    return messagesHeard
  }
}

module.exports = Shouty
