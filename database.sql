CREATE DATABASE livehome DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;

use livehome;

create table if not exists house (
	Id Int(11) NOT NULL AUTO_INCREMENT,
    progressdone INT(11) NOT NULL,
    primary key (Id));
    
drop table image;
create table if 	not exists image (
	Id Int(11) NOT NULL AUTO_INCREMENT,
    House INT(11) NOT NULL,
    imageLocation VARCHAR(255) NOT NULL,
    dateTaken TIMESTAMP NOT NULL,
    primary key (Id),
    foreign key (House) REFERENCES House(Id));
    
create table if not exists user (
	Id Int(11) NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NULL DEFAULT NULL,
    password VARCHAR(255) NOT NULL,
    primary key (Id));

create table if not exists builderHouse (
	Id Int(11) NOT NULL AUTO_INCREMENT,
    User INT(11) NOT NULL,
    House INT(11) NOT NULL,
    primary key (Id),
    foreign key (User) REFERENCES User(Id),
    foreign key (House) REFERENCES House(Id));
    
create table if not exists CustomerHouse (
	Id Int(11) NOT NULL AUTO_INCREMENT,
    User INT(11) NOT NULL,
    House INT(11) NOT NULL,
    primary key (Id),
    foreign key (User) REFERENCES User(Id),
    foreign key (House) REFERENCES House(Id));
    
create table if not exists OpenMeeting (
	Id Int(11) NOT NULL AUTO_INCREMENT,
    User INT(11) NOT NULL,
    dateStart TIMESTAMP NOT NULL,
    primary key (Id),
    foreign key (User) REFERENCES User(Id),
    foreign key (House) REFERENCES House(Id));
