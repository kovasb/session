-- DROP USER datomic

CREATE USER datomic WITH PASSWORD 'datomic' NOSUPERUSER;

GRANT ALL ON KEYSPACE datomic TO datomic;
