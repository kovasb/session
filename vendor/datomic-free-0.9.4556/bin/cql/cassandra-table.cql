-- DROP TABLE IF EXISTS datomic.datomic;

CREATE TABLE IF NOT EXISTS datomic.datomic
(
  id text PRIMARY KEY,
  rev bigint,
  map text,
  val blob
);
