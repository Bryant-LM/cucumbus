const assert = require('assert')
const Shouty = require('../lib/shouty')
const Coordinate = require('../lib/coordinate')

shouty = new Shouty()

describe('Shouty', () => {
    it('should set tone', () => {
        shouty.saySomething('a', 'Hello world', "whisper")
        assert.equal(shouty.toneByShouter.get('a'), "whisper")
    })
})