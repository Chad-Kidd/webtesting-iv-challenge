const db = require('../data/dbConfig');
const Rockstars = require('../rockstars/rockstarsModel');

describe('rockstars model', () => {
  describe('insert()', () => {
    it('should insert provided rockstar',  async () => {
     await Rockstars.insert({name: 'Bowie'});

     const rockstars = await db('rockstars');

     expect(rockstars).toHaveLength(1);
    })
  })
  
})