CREATE DATABASE burgers_db;
USE burgers_db;

create table burgers (
	id int not null auto_increment,
    burger_name varchar(50),
    devoured boolean default(0),
    primary key(id)
);