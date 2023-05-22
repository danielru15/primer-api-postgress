CREATE DATABASE prueba2;

CREATE TABLE users(
    id serial primary key,
    name VARCHAR(40),
    email text,
)

insert into users(name, email)
    values('daniel', 'daniel@gmail.com'),
    ('janedh', 'jua@gmail.com')