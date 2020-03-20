CREATE DATABASE adq;

USE adq;

CREATE TABLE users(
    id INT(11) not null AUTO_INCREMENT,
    username Varchar(32) not null,
    user_url Varchar(254),
    PRIMARY KEY (id)
);

CREATE TABLE characters(
    id INT(11) not null AUTO_INCREMENT,
    charName Varchar(32),
    PRIMARY KEY (id)
);

CREATE TABLE characteristicUser (
    id int(11) NOT NULL AUTO_INCREMENT,
    UserID int,
    CharacteristicID int,
    valueChar Varchar(32),
    PRIMARY KEY (id),
    FOREIGN KEY (UserID) REFERENCES users(id),
    FOREIGN KEY (CharacteristicID) REFERENCES characters(id)
);
