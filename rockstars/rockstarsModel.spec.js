const db = require('../data/dbConfig');
const Rockstars = require('../rockstars/rockstarsModel');

describe('rockstars model', () => {
  afterEach(async () => {
    await db('rockstars').truncate();
  });

  describe('insert()', () => {
    it('should insert provided rockstar',  async () => {
     await Rockstars.insert({name: 'Bowie'});

     const rockstars = await db('rockstars');

     expect(rockstars).toHaveLength(1);
    })
    it('should insert provided rockstar', async () => {
      let rockstar = await Rockstars.insert({ name: 'Bowie' });
      expect(rockstar.name).toBe('Bowie');

      rockstar = await Rockstars.insert({ name: 'Slash' });
      expect(rockstar.name).toBe('Slash');

      const rockstars = await db('rockstars');

      expect(rockstars).toHaveLength(2);
    });
  })
})