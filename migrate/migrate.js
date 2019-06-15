const Banck = require('../datasouce/bank');
//const sql = ('../migrate/migrate.sql');

const bank = new Banck();

const main = async () => {
    bank.isConnected();
    bank.read('create table message\n' +
        '(\n' +
        '\tid int\n' +
        '\t\tconstraint message_pk\n' +
        '\t\t\tprimary key,\n' +
        '\tauthor varchar,\n' +
        '\tmessage varchar\n' +
        ');');

};

main();



