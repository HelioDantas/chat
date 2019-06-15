create table message
(
	id int
		constraint message_pk
			primary key,
	author varchar,
	message varchar
);

