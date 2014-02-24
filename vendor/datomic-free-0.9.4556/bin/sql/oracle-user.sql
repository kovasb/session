-- NOTE: See orable-table.sql for instructions on installing Oracle driver

-- Prior to running this script, you need:
-- - To run oracle-table.sql as a privileged user -- see oracle-table.sql

-- Database SID: datomic
-- Table: datomic_kvs

CREATE USER datomic IDENTIFIED BY 'datomic';

GRANT SELECT, INSERT, UPDATE, DELETE ON datomic.datomic_kvs TO datomic;
