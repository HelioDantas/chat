create table message
(
	id int
		constraint message_pk
			primary key,
	author varchar,
	message varchar
);
create sequence message_id_seq;\n' +
        '\n' +
        'alter table message alter column id set default nextval(\'public.message_id_seq\');\n' +
        '\n' +
        'alter sequence message_id_seq owned by message.id;');
