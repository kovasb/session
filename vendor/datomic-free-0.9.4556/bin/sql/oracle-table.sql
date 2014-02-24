-- NOTE: Datomic does not ship with an Oracle driver. To use these
-- scripts, you must download the driver from
-- http://www.oracle.com/technetwork/database/enterprise-edition/jdbc-112010-090769.html
-- and copy the jar file into the lib directory of the transactor so
-- that it is available to the transactor. You must also ensure the
-- jar is available on the classpath of your peer application.

-- Prior to running this script, you need:
-- - To create the database using the Oracle developer tools
-- - To connect to the new database as a privileged user

-- Database SID: datomic

CREATE TABLE datomic_kvs
(
  "ID" VARCHAR2(640 BYTE) NOT NULL ENABLE,
  "REV" NUMBER,
  "MAP" CLOB,
  "VAL" BLOB,
  CONSTRAINT "DATOMIC_KVS_PK" PRIMARY KEY ("ID")
)
