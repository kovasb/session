-- DROP KEYSPACE IF EXISTS datomic;

CREATE KEYSPACE IF NOT EXISTS datomic WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};

