const assert = require('assert')
const Shouty = require('../../lib/shouty')
const Coordinate = require('../../lib/coordinate')

const {defineSupportCode} = require('cucumber')

defineSupportCode(({Before, Given, When, Then}) => {
  const ARBITARY_MESSAGE = 'Hello, world'
  let shouty
  Before(function() {
    shouty = new Shouty()
  })

  Given('{str} is at {int}, {int}', function (name, x, y) {
    shouty.setLocation(name, new Coordinate(x, y))
  })

  When('{str} shouts', function (name) {
    shouty.saySomething(name, ARBITARY_MESSAGE, "shout")
  })

  Then('Lucy should hear Sean', function () {
    assert.equal(shouty.getMessagesHeardBy('Lucy').size, 1)
  })

  Then('Lucy should hear nothing', function () {
    assert.equal(shouty.getMessagesHeardBy('Lucy').size, 0)
  })

    //-------------------------------


    When('{str} whispers', function (name) {
       //assert(true,true);
        shouty.saySomething(name, ARBITARY_MESSAGE, "whisper")
    })


    Then('Lucy whispers hear Sean', function () {
        // assert(true,true);
        assert.equal(shouty.getMessagesHeardBy('Lucy').size, 1)
    })

    Then('Lucy whispers hear nothing', function () {
        // assert(true,true);
        assert.equal(shouty.getMessagesHeardBy('Lucy').size, 0)
    })

})
