# Projeto desenvolvido para aplicar os conhecimentos adiquiridos sobre Node, Express e Arquitetura MSC.

###   Para este projeto o banco de dados utilizado foi o MySQL, com a seguinte configuração inicial:

```
create database if not exists msc_example;

use msc_example;

create table users
(
	id int not null auto_increment,
    name varchar(50) not null,
    password varchar(100) not null,
    primary key(id)
);

insert into users (name, password)

values
	('user1', '1234'),
    ('user2', '5678');

create table recipes
(
    id int not null auto_increment,
    name varchar(100) not null,
    price float not null,
    wait_time int not null,
    primary key(id)
);

insert into recipes (name, price, wait_time)

values
	('Lasanha', 40.0, 30),
    ('Macarrão a Bolonhesa, 35.0, 25),
    ('Macarrão com molho branco', 37.0, 25);

create table drinks
(
    id int not null auto_increment,
    name varchar(100) not null,
    price float not null,
    primary key(id)
);

insert into drinks (name, price)

values
    ('Refri em lata', 5.0),
    ('Refri 600ml', 8.0),
    ('Suco 300ml', 4.0)
```
