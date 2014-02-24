-- NOTE: see mysql-db.sql for instructions on installing mysql driver

-- Table: datomic_kvs

-- DROP TABLE datomic_kvs;

CREATE TABLE datomic_kvs
(
 id varchar(640) NOT NULL,
 rev integer,
 map text,
 val longblob,
 CONSTRAINT pk_id PRIMARY KEY (id)
) ENGINE=INNODB


