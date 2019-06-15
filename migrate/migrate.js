const Banck = require('../datasouce/bank');
//const sql = ('../migrate/migrate.sql');

const bank = new Banck();

const main = async () => {
   bank.isConnected();
    bank.read('delete from message where id > 126');
};

main();



