# Projeto desenvolvido para aplicar os conhecimentos adiquiridos sobre Node, Express e Arquitetura MSC.

###   Para este projeto o banco de dados utilizado foi o MySQL, com a seguinte configuração inicial:

```
create database if not exists msc_example;

use msc_example;

create table authors
(
	id int not null auto_increment,
    first_name varchar(30) not null,
    middle_name varchar(30),
    last_name varchar(30) not null,
    birthday date,
    nationality varchar(100),
    primary key(id)
);

insert into authors (first_name, middle_name, last_name, birthday, nationality)

values
	('George','R. R.','Martin','1948-09-20','norte-americano'),
    ('J.','R. R.','Tolkien','1892-01-03','britânico'),
    ('Isaac',NULL,'Asimov','1920-01-20','russo-americano'),
    ('Frank',NULL,'Herbert','1920-02-11','norte-americano'),
    ('Júlio',NULL,'Verne','1905-03-24','francês');
```