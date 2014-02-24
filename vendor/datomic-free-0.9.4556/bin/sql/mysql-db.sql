-- NOTE: Datomic does not ship with a MySql driver. To use these scripts, you must
-- download the driver from http://dev.mysql.com/downloads/connector/j/ and copy
-- the jar file into the lib directory of the transactor so that it is available
-- to the transactor. You must also ensure the jar is available on the classpath of
-- your peer application.

-- Database: datomic

-- DROP DATABASE datomic;

CREATE DATABASE datomic;
