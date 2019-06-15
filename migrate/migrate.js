const Banck = require('../datasouce/bank');
//const sql = ('../migrate/migrate.sql');

const bank = new Banck();

const main = async () => {
    bank.isConnected();
    bank.read('create sequence message_id_seq;\n' +
        '\n' +
        'alter table message alter column id set default nextval(\'public.message_id_seq\');\n' +
        '\n' +
        'alter sequence message_id_seq owned by message.id;');

};

main();



