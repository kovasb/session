-- NOTE: see mysql-db.sql for instructions on installing mysql driver

-- DROP USER datomic@localhost;

GRANT ALL ON datomic.* TO datomic@localhost IDENTIFIED BY 'datomic';

