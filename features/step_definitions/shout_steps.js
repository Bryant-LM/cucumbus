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
    shouty.shout(name, ARBITARY_MESSAGE)
  })

  Then('Lucy should hear Sean', function () {
    assert.equal(shouty.getMessagesHeardBy('Lucy').size, 1)
  })

  Then('Lucy should hear nothing', function () {
    assert.equal(shouty.getMessagesHeardBy('Lucy').size, 0)
  })

})
