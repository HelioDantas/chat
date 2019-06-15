const Banck = require('../datasouce/bank');
const sql = require('../migrate/migrate.sql');

const bank = new Banck();

const main = async () => {
    bank.isConnected();
    bank.read(sql);

};

main();



