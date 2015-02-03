mysql
=====

## Installation

### MySQL Installation

#### Homebrew package manager 
https://coderwall.com/p/os6woq/uninstall-all-those-broken-versions-of-mysql-and-re-install-it-with-brew-on-mac-mavericks

https://www.youtube.com/watch?v=q5a-Dn7GGVc

#### MySQL - start server, create database, create table, Insert data

```
Sql Server
$ mysql.server start
$ mysql.server stop
$ mysqladmin version   <- it is running if shows version info
$ mysql --version

$ type -a mysql   <- find out where MYSQL is installed
mysql is /usr/local/bin/mysql
mysql is /usr/local/bin/mysql

Create database
$ sudo /usr/local/bin/mysql -u root
mysql> create database INVENTORY;
mysql> show databases;
community=username; mysql01=password;
mysql> GRANT ALL PRIVILEGES ON INVENTORY.* TO 'community'@'localhost'
    -> IDENTIFIED BY 'mysql01' WITH GRANT OPTION;
grant all privileges to inventory database
mysql> GRANT ALL PRIVILEGES ON INVENTORY.* TO 'community'@'%'
    -> IDENTIFIED BY 'mysql01' WITH GRANT OPTION;

setup the users that just created for the particular database
mysql> FLUSH PRIVILEGES;
quit
mysql> \q

Select database
login as username=community
$ mysql -u community -p
mysql> use INVENTORY    <- select table
mysql> show tables;   <- show tables
mysql> SELECT DATABASE() FROM DUAL;   <- show current database

Create tables
mysql> CREATE TABLE customer (name VARCHAR(20), age INT);
mysql> SHOW TABLES;

Insert data
mysql> INSERT INTO customer (name, age) VALUES("Tom", 10);
mysql> INSERT INTO customer (name, age) VALUES("Dick", 20);
mysql> INSERT INTO customer (name, age) VALUES("Harry", 18);
mysql> SELECT * FROM INVENTORY.customer;
```

## Installation

> `npm install`

## Running / Development

> `node connect-query.js`