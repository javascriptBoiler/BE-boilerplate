const seeder = require('mongoose-seed');
// data files
const user = require('./data/user');

const db = 'mongodb://localhost:27017/shareit';
const data = [user];
const models = ['user'];

seeder.connect(db, () => {
  seeder.loadModels(['./seeds/schema/user']);

  seeder.clearModels(models, () => {
    seeder.populateModels(data, (err, done) => {
      if (err) {
        console.log('mongo seeds error::::::', err.message);
      }
      if (done) {
        console.log('seeder successfully done::::::::::', done);
      }
      seeder.disconnect();
    });
  });
});
