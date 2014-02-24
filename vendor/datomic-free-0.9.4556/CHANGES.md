<!-- -*- mode: markdown ; mode: visual-line ; coding: utf-8 -*- -->

## Changed in 0.9.4556

* New feature: Lookup refs.
  See http://blog.datomic.com/2014/02/datomic-lookup-refs.html.

* Fixed bug where the transaction tempid would not resolve correctly
  when used only in value position.

* Fixed bug where peers could leak resources trying to connect to
  databases that have been deleted.

* More detailed error messages for some invalid transactions.

***********************************************************************
0.9.4532 includes an upgrade to the log format that requires simultaneous
update of peers and transactors, and is not compatible with older
versions, see below:

## Changed in 0.9.4532

This release upgrades the database log to format version 2.

* All peers and transactors in a system must move together to this
  version or later.  

* The transactor and peers are backwards compatible with log version
  1. Transactors will automatically upgrade database logs to version 2
  when a database is used.  The performance cost of this upgrade is
  negligible and upgrades can be performed against production systems.

* Older versions of the peer and transactor are *not* forward
  compatible with log version 2, and will report the following error:

    NullPointerException   java.util.UUID.fromString

* Downgrading to log version 1 is possible. This release includes a
  command line tool that can be used to downgrade a database to log
  version 1:
 
    bin/datomic revert-to-log-version-1 {your-database-uri}

* Fixed bug where, after a transactor failure, Datomic processes could
  fail to start with a "Gap in data" exception.

* Fixed performance problem with /variance/ and /sttdev/ query
  aggregation functions.

* Limited thread use in query.

## Changed in 0.9.4497

* Improvements to the REST client. See http://docs.datomic.com/rest.html.

* Added a GettingStarted.groovy sample in the samples/seattle directory.

* Added SSL support for Riak and Cassandra. See
  http://docs.datomic.com/storage.html

* Improved script for launching transactor to allow for cleaner process
  management.

* Improved built-in Compare-and-Swap performance.

* Datomic now enforces the total number of schema elements (such as attributes,
  partitions and types) to be fewer than 32k.

## Changed in 0.9.4470

* New Feature: Alter Schema.
  See http://blog.datomic.com/2014/01/schema-alteration.html.

  This feature breaks compatibility with older versions.  Once a
  schema alteration has been performed on a database, only connect
  peers and transactors running at least version 0.9.4470 to that
  database.

* New API: Database.attribute.
  See http://docs.datomic.com/javadoc/datomic/Database.html#attribute(java.lang.Object)
  and http://docs.datomic.com/javadoc/datomic/Attribute.html.

* New APIs: Connection.syncIndex / syncSchema / syncExcise.
  See http://docs.datomic.com/javadoc/datomic/Connection.html.

* Datomic will now reject some unworkable memory settings, e.g.
  combinations of memory-index-max and object-cache-max that
  exceed 75% of JVM RAM.

* Added validation to prevent conflicting unique value assertions
  within a transaction.

* Fixed bug that prevented Datomic Console from working with Riak
  or Cassandra storages.

* Better logging for Riak storage.

## Changed in 0.9.4384

* Preliminary support for Cassandra storage, see
  http://docs.datomic.com/storage.html.

## Changed in 0.9.4360

* Used jarjar to move Datomic's use of Apache Lucene to package names
  that will not conflict with application use of Lucene.

## Changed in 0.9.4353

* Updated to aws-java-sdk 1.6.6.

* Datomic now supports DynamoDB Local as a development-time storage
  option.  See http://docs.datomic.com/storage.html.

* Datomic transactions now validate that tempids have a valid
  partition.

* Fixed bug where some transactions would timeout unnecessarily, even
  though the work was completed by the transactor.

* Fixed bug where fulltext queries did not find answers in the history
  database.

## Changed in 0.9.4331

* Made transactor more robust against transient SQL storage connection
  failures.

* Fixed bug where transactor would log a spurious NPE from
  datomic.hornet during shutdown.

## Changed in 0.9.4324

* Fixed a bug in IAM roles support that prevented automatic renewal of
  role credentials in one case.

* Fixed a bug in the build process that caused the 0.9.4314 version of
  console to be non-operational.

## Changed in 0.9.4314

*  IAM roles are now the preferred way to supply credentials when
   running Datomic in AWS.
   See http://docs.datomic.com/storage.html to configure a new
   transactor using IAM roles.
   See http://docs.datomic.com/migrate-to-roles.html to migrate an
   existing Datomic configuration to use IAM roles.

* The transactor now supports a mechanism for integrating different
  monitoring services, see the 'Custom Monitoring' section of
  http://docs.datomic.com/monitoring.html.

* Updated Riak client to 1.4.2.

* Cloudwatch and custom monitoring now report the count of
  `RemotePeers`.

## Changed in 0.8.4270

* Fixed bug where large excisions could prevent subsequent storage
  garbage collection.

* Fixed bug where Datomic Pro eval keys did not have access to HA.

* Datomic now verifies Lucene major version without using package
  reflection (fixes inability to uberjar 4260).

* Updated Fressian dependency to 0.6.5.

* Better error message on nil input to query.

## Changed in 0.8.4260

* Make sure Util.read preloads schema-reading helpers, so that schemas
  can be read prior to touching a database.

* Fixed bug in connection pool validator for Oracle SQL storage.

## Changed in 0.8.4254

* New: Datomic Console.
  See http://docs.datomic.com/console.html.

* More consistent use of exceptions throughout API.
  See http://docs.datomic.com/exceptions.html.

* Quicker detection of transactor disconnects, reported to peers
  via exceptions in transaction futures and sync futures.

* Fixed bug in 4215, 4218 that caused `IllegalStateException` when
  calling `Util.read`.

* Corrected sa-east-1 transactor AMI ID.

## Changed in 0.8.4218

* Fixed bug where transaction promises could be garbage collected
  before a transaction completes, preventing `ListenableFuture`
  callbacks from firing.

## Changed in 0.8.4215

* Improved redundacy elimination.  If a transaction presents a datom
  that is identical (except for tx) to an existing datom, that datom
  will not be added to the log.
     
## Changed in 0.8.4159

* Updated aws-java-sdk dependency to 1.5.5, discontinued using
  jets3t. 

* Reduced background thread usage in query.

* Transactions now convert doubles to floats when attribute schema
  requires floats.

* Transactor heartbeat is now more robust in the face of transient
  failures writing to storage.

## Changed in 0.8.4143

* `:db/noHistory` now respected by indexer.

* more precise docstring for `:db/noHistory`.

## Changed in 0.8.4138

* Improved transactor performance, specifically around memory usage and GC
  pauses.  This includes improved memory efficiency in indexing, and a
  new set of GC flags in bin/transactor.

* Fixed bug where queries with constants in V position could return
  too many results.

* Transactor does more useful logging at INFO level, so there should
  be less need to modify logging configuration.

## Changed in 0.8.4122

* New: API for accessing the log.  
  See http://http://docs.datomic.com/log.html.

* Return correct result from REST avet datoms call when neither start
  nor end are provided.

* Eliminate spurious file bin/logback-test.xml that was incorrectly
  included in 0.8.4111.

## Changed in 0.8.4111

* New: Memory settings for the transactor must be explicitly specified
  in the transactor properties file.  There are no default settings,
  so existing transactor property files that lack these settings will
  no longer work.  The transactor properties sample files include
  three complete examples, representing ongoing usage, one-time
  imports, and constrained-memory usage during development.

* New: Stricter validation of datoms within a single transaction,
  preventing duplication of the same datom and multiple assertions of
  cardinality-one attributes.  This will cause transactions that would
  formerly have succeeded to fail with a validation error.

* New: The transactor and peer now require Clojure 1.5.1 or greater.

* New: Peer configuration setting for peer/transactor connection
  timeout.  Specify system property `datomic.peerConnectionTTLMsec` in
  milliseconds.  Default and minimum are both 10000.

* New: Reverse attribute lookups from an entity are returned as sets.

* Transactors are now more robust in the face of transient errors
  writing to storage.

* `touch` now works correctly for component entities that have
  `:db/ident`.

* Better error messages for invalid S3 backup URL, attempting to back
  up a database that does not exist.

* Updated jetty dependencies (used in REST server).

## Changed in 0.8.4020.26

* Fixed bug that prevented zero-argument data functions in Java.

* Fixed bug where peers have trouble connecting when already-connected
  peers are producing a heavy write load.

## Changed in 0.8.4020.24

* Fixed bug in 0.8.4020 where nested collections of preexisting entity
  ids were incorrectly rejected by the transactor, with a "Unable to
  interpret ... as a reference target" message.

* Fixed bug in 0.8.4020 where use of a transaction entity in value
  position only leads to background indexing failure on the transactor.

## Changed in 0.8.4020

* Component entities can now be created as nested maps in transaction
  data, see http://blog.datomic.com/2013/06/component-entities.html.

* Tightened peer HornetQ timeout for faster failover.

* Allow sets as an alternative to lists when specifying values for a
  cardinality-many attribute in transaction data.

* Fixed bug: Allow the transaction entity to appear in value position
  only in transaction data.

* Fixed bug: Prevent excessive memory use that would occur before
  rejecting invalid transaction that attempts to `db.fn/retractEntity`
  nil.

## Changed in 0.8.4007

* Updated several library dependencies to more recent versions: aws,
  guava, h2, logback, netty, and slf4j.

* Better `toString` representations for objects likely to be
  encountered in shell (e.g. groovysh) sessions.

## Changed in 0.8.3993

* Increased parallelism in query.

* New API: Connection.sync. 
  See http://blog.datomic.com/2013/06/sync.html.

* Connection.db now returns a database immediately, even if the
  transactor is unavailable.

* Improved peer recovery time during HA failover. 
  See http://docs.datomic.com/ha.html.

## Changed in 0.8.3971

* Fixed bug where some active log segments are marked as garbage,
  which can result in log corruption after a call to `gcStorage`.
  Moving to this release is strongly advised.

* Improved CloudWatch metric: `IndexWrites` is now reported once per
  indexing job, making it easier to reason about per-index-job load.

* New CloudWatch metric: `TransactionBatch` tracks the number of
  transactions batched into a single write to the log.

* New CloudWatch metric: `MemoryIndexFillMsec` reports an estimate of
  the time to fill the memory index, given the current write load.

## Changed in 0.8.3970

(Do not use this release.)

## Changed in 0.8.3960

* Fixed bug where indexing jobs could fail for fulltext attributes.

## Changed in 0.8.3952

* Fixed bug where HA transactor pool can become stuck and no
  transactor can start. All HA users should adopt this release as soon
  as possible.

* Mark log segments as garbage after excision. Note that .gcStorage is 
  still a necessary separate step.

* Improved efficiency writing transaction log. 

* Quickly report pending transasctions failed if transactor connection 
  is lost.

## Changed in 0.8.3941

* Excision, see http://docs.datomic.com/excision.html.

## Changed in 0.8.3899

* Fixed bug where background index creation could fail to trigger in
  systems running multiple databases, eventually resulting in need to
  restart transactor.

## Changed in 0.8.3895

* Allow explicit `h2-port` and `h2-web-port` specification in the query
  string for free and dev protocols.

* Fixed bug where Hornet usage of file system did not respect `data-dir`
  transactor property.

* Upgraded to netty 3.6.3.Final.

## Changed in 0.8.3889

* Enhanced SQL storage to work with a wider set of databases,
  including Oracle.

* Fixed bug where, after a cold restart of transactor, peer could
  attempt transactions that would arrive before the transactor was
  ready and timeout.

* Fixed bug that caused "Database deleted" error when deleting and
  recreating databases in development.

* Fixed bug in CloudFormation template creation that required explicit
  setting of `java-opts` property, even when defaults acceptable.

* Added missing AWS instance sizes to CloudFormation template
  generator.

* Upgraded to AWS Java SDK 1.4.1.

## Changed in 0.8.3862
   
* Fixed incorrect validation introduced in 0.8.3861 that
  prevented asserting the attribute value `false`.

## Changed in 0.8.3861

* New API `Peer.shutdown`

* New API `Connection.release`

* Fixed spurious error after heartbeat failure on transactor.

* New: positional destructuting of datoms (Clojure API).

* Fixed performance problems in `:db.fn/retractEntity`.

## Changed in 0.8.3848

* Fixed `Entity.keySet` to return a set of strings.

* Better naming convention for logrotation:
  `{bucket}/{system-root}/{status}/{time-status-reached}`,
  where status is "active" or "standby".

## Changed in 0.8.3843

* Fixed bug where invalid (non-string) fulltext attribute prevents log
  ingest.

* New `seekDatoms` and `entidAt` APIs.

* `Heartbeat` and `HeartMonitor` metrics have been replaced by the
  more informative `HeartbeatMsec` and `HeartMonitorMsec` metrics.

* New `java-opts` option in transactor properties.

## Changed in 0.8.3826

* Improved resilience to transient errors in backup/restore.

* Upgrade to netty 3.6.0.Final, fixing SSL race condition that could
  prevent peers from connecting.

* New `java-xmx` setting in CloudFormation template makes JVM heap
  configuration more evident.

* Deprecated `StorageBackoff` metric in favor of more explicit
  `StorageGetBackoffMsec` and `StoragePutBackoffMsec` metrics.

## Changed in 0.8.3814

* Prevented aggressive timeout in Peer.connect that could occur
  when connecting to cold transactor + slow log ingest.

* Allowed peers to ingest log in parallel with ingest on a cold
  transactor.

* Added LogIngestMsec and LogIngestBytes Cloudwatch metrics. See
  http://docs.datomic.com/monitoring.html for more on metrics.

* Renamed system property `datomic.objectCacheBytes` to
  `datomic.objectCacheMax` for consistency with other property names.
  See http://docs.datomic.com/capacity.html for more on
  capacity-related properties.

## Changed in 0.8.3803

* Fixed bug that caused intermittent deadlock communicating with
  storage.

* Reduced memory usage during backup and restore.

## Changed in 0.8.3789

* Made default JVM heap sizes for AMI appliance more conservative.

* Set transactor instance name based on CloudFormation template name.

* Include command-line utility JARs that were inadvertently omitted in
  0.8.3784.

## Changed in 0.8.3784

* Improved indexing performance: lower memory use on the transactor,
  and higher transaction throughput during indexing jobs.

* New deployment documentation: http://docs.datomic.com/deployment.html

* New transactor memory setting `memory-index-threshold`, and expanded
  documentation at http://docs.datomic.com/capacity.html

* Overhauled the metrics reported by the transactor. Learn about the
  new metrics at http://docs.datomic.com/monitoring.html.

* Fixed bug that caused incomplete garbage collection of storage on
  DynamoDB.

## Changed in 0.8.3767

* Fixed bug where deleting a database could cause subsequent indexing
  jobs of other databases to fail with
  "No implementation of method: :queue-database-index ..."

* New `Alarm` metric is fired whenever the transactor encounters a
  problem that requires manual intervention.

* Improved indexing performance, particularly for larger string and
  binary values.

## Changed in 0.8.3731

* Improved resilience in the face of unreliable or throttled storages.

* Added write-concurrency setting to transactor properties file, which
  can be used to limit the number of concurrent writes to storage.

* Added StorageBackoff metric, which records the amount of time spent
  backing off and waiting for storages.

* Fixed bug where fulltext queries would sometimes seek off the end of
  an index and throw IOException.

***********************************************************************
## 0.8.3705 is a breaking change to peer/transactor communication !!

## Changed in 0.8.3705

* Upgrade to HornetQ 2.2.21.  This change breaks compatibility with
  older versions, so peers and transactors must be upgraded together.

## Changed in 0.8.3704

* Fixed bug in HA support. HA does not work with the three previous
  releases (3692, 3664, 3655). If you are running a standby
  transactor for HA, make sure to upgrade to this release.

## Changed in 0.8.3692

* Fixed bug where restore would restore to a version other than the
  most recent in the backup storage.

* Improved backup CLI: You can now `list-backups` to see different 
  points in time (t) that are backed up to a storage, and pass a `t`
  argument to `restore-db` to restore from a version other than the
  most recent in the backup storage. 

* Fixed bug: all transaction errors now throw exceptions consistent
  with the API documentation.  (Some errors had been throwing early,
  on transact, rather than on dereferencing the transaction future.)

* Fixed bug where a portion of the history index was not considered by
  the `asOf` database filter.

* Fixed bug where, under unusual circumstances, datoms could reappear
  in the present index, even though they had been retracted.

* Performance optimization: Peer cache now reads ahead on indexes.

* Updated to spymemcached 2.8.9.

* Fixed bug where retraction of a nonexistent fulltext attribute value
  could cause subsequent indexing jobs to fail.

* Fixed bug that could prevent connection to a database after a
  cycle of create / backup / delete / restore.

## Changed in 0.8.3664

* Added gap-detection validation when reading log on startup. 

Operating with a gap, while not resulting in loss of data, can cause
violations of uniqueness and cardinality constraints. Users on
releases prior to 0.8.3664 are strongly encouraged to move to 0.8.3664
or later as soon as possible.

## Changed in 0.8.3655

* Fixed bug where entities could have more than one :db/fn attribute.

* Fixed bug in log loading where a window of data could be invisible
  on restart, even though that data is present in the log.

## Changed in 0.8.3646

* Fixed bug where database indexing fails after a backup/restore
  cycle.

* Fixed bug in Clojure API where transaction futures sometimes would
  return (rather than throw) an exception.

* Fixed bug in Java API where transaction futures would occasionally
  return an object that is not the documented map.

* Better error reporting for some kinds of invalid queries.

* alpha support for CORS in the REST service. Note that the
  bin/rest args have changed. See http://docs.datomic.com/rest.html
  for details. 

## Changed in 0.8.3627

* Fixed bug where first restore of a database to a new storage did
  not include the most recent data, even though that data was present
  in the backup. (Subsequent restores were unaffected).

* Queries now take a :with clause, to specify variables to be kept in
  the aggregation set but not returned.

* Database.filter predicates now take two arguments: the unfiltered
  Database value and the Datom.

* You can now retrieve the Database that is the basis of an entity
  with Entity.db.

* You can now install a release of Datomic Pro into your local maven
  repository with bin/maven-install.

## Changed in 0.8.3619

* Alpha release of Database.filter, which returns a value of the
  database filtered to contain only the datoms satisfying a predicate.

* New AWS metric: IndexWrites.

* Peers no longer need to include a Datomic-specific maven repository,
  as Fressian (http://fressian.org) is now available from Maven
  Central and clojars.

## Changed in 0.8.3611

* Added memory-index-max setting to allow higher throughput for
  e.g. import jobs. See 
  http://support.datomic.com/customer/portal/articles/850962-handling-high-write-volumes
  for details.

* Bugfix: Fixed bug that prevents indexing jobs from completing with
  some usages of fulltext attributes.

* Added additional AWS instance types to AMI setup scripts.

* Bugfix: Cloudformation generation now respects
  aws-autoscaling-group-size setting.

* Fixed broken query example in GettingStarted.java.

* Fixed docstring for datomic.api/with.

## Changed in 0.8.3599

* Fixed "No suitable driver" error with dev: and free: protocols in
  some versions of Tomcat.

* Updated bin/datomic `delete-cf-stack` command to work with
  multiregion AWS support.

## Changed in 0.8.3595

* Fixed bug that prevented building queries from Java data.

* Transactor AMIs are now available in all AWS regions that support
  DynamoDB: us-east-1, us-west-1, us-west-2, eu-west-1,
  ap-northeast-1. and ap-southeast-1.

* Breaking change: CloudFormation properties file has a new required
  key `aws-region`, allowing you to select the AWS region where a
  transactor will run.

## Changed in 0.8.3591

* Preliminary support for Couchbase and Riak storages.

* Breaking change: DynamoDB storage is now region-aware. URIs
  include the AWS region as a first component. The transactor
  properties file has a new mandatory property `aws-dynamodb-region`.

* Breaking change: CloudWatch monitoring is now region-aware. If using
  CloudWatch, you must set `aws-cloudwatch-region` in transactor
  properties.

* Transactions now return a datomic.ListenableFuture, allowing a
  callback on transaction completion.

* Fixed bug in the command line entry point for restoring a database,
  which was defaulting to the most ancient backup instead of thre most
  recent.

* Fixed bug that prevented restoring to a `dev:` or `free:` storage in
  some situations.

## Changed in 0.8.3561

* Breaking change: db.with() now returns a map like the map returned
  from Connection.transact().

* Incompatible and unsupported schema changes now throw exceptions.

* Better error messages when calling query with bad or missing inputs.

* Documented system properties.

## Changes in 0.8.3551

* Fixes to alpha aggregation functions.

## Changes in 0.8.3546

* Alpha support for aggregation functions in query.

## Changes in 0.8.3538

* Fixed bug where variables bound by a query :in clause were not seen
  as bound inside rules.

* Added `invoke` API for invoking database functions.

## Changes in 0.8.3524

* Fixed bug that caused temporary ids to read incorrectly in
  transaction functions, causing transactions to fail.

## Changes in 0.8.3520

* Fixed but that prevented catalog page from loading on REST service when 
  running against a persistent storage.

* Enhancements to REST documentation.

## Changes in 0.8.3511

* The REST service is now its own documentation. Just point a browser at the root
  of the server:port on which you started the service. Note that the "web app"
  that results *is* the service. It is not an app built
  on the service, nor a set of documentation pages about the
  service. The URIs, query params, and POST data are the same ones you
  will use when accessing the service programmatically.

## Changes in 0.8.3488

* Initial version of REST service.

## Changes in 0.8.3479

* new API: `Entity.touch` touches all attributes of an entity, and any
  component entities recursively.

## Changes in 0.8.3470

* Fixed bug where some recursive queries return incorrect results.

* Fixed bug in command-line entry point for restoring from S3.

## Changes in 0.8.3460

* Fixed bug where peers could continue to interact with connections to
  deleted databases.

* Fixed query bug where constants in queries were not correctly joined
  with answers.

* Fixed directory structure in JAR file format, which was causing
  problems for some tools.

* Report serialization errors back to data function callers, rather
  than make them wait for transaction timeout.

* Better error messages for some common URI misspellings.

## Changes in 0.8.3438

* Fixed bug in :db/txInstant that prevented backdating before db was
created.

## Changes in 0.8.3435

* new API: `Peer.resolveTempid` provides the actual database ids
  corresponding to temporary ids submitted in a transaction.

* changed API: You can now explicitly specify the :db/txInstant of a
  transaction. This facilitates backdating transactions during data
  imports.

* changed API: Transaction futures now return a map with DB_BEFORE,
  DB_AFTER, TX_DATA and TEMPIDS.

* changed API: Transaction report queues now report the same data as
  calls to `Connection.transact`

* changed API: Transaction report TX_DATA now includes retractions in
   addition to assertions.

* new API: `Database.basisT` returns the t of the most recent
  transaction

* Bugfix: fixed bug that prevented AWS provisioning scripts from running

## Changes in 0.8.3423

* new API: `Database.history` returns a value of a database containing
  all assertions and retractions across time

* new API: `Database.isHistory` returns true if database is a history
  database

* new API: `Datom.added` returns true if datom is added, false if
  retracted

* changed API: the Datom relation in a query now exposes a fifth
  component, containing a boolean that is true for adds, false for
  retracts

* changed API: removed `Index` class, range capability now available
  directly from `Database`

* Bugfix: calling `keys` on an entity with no current attributes no
  longer throws NPE

* udpated to use recent (12.0.1) version of Google Guava

* when a peer calls `deleteDatabase`, shutdown that peer's connection

## Changes in 0.8.3397

* fixed bug where some recursive queries returned partial results

* simplified license key install: pro license keys are installed via a
  `license-key` entry in the transactor properties file

* connection catalog lookup is cached, so it is inexpensive to call
  `Peer.connect` as often as you like

* improved fulltext indexing and query performance

## Changes in 0.8.3372

* changed API: query clauses are considered in order

* changed API: when navigating entities, references to entities that
  have a `db/ident` return that ident, instead of the entity

* new API: `Database.index` supports range requests

* fixed broken dependency that prevented datomic-pro peer jar from
  working with DynamoDB

* new API: `Peer.part` function returns the partition of an entity id

* new API: `Peer.toTx` and `Peer.toT` conversion functions

* entity equality is ref-like, i.e. identity-based

* eliminated resource leaks that affected multiple databases and
  some failover scenarios

## Changes in 0.8.3343

* added API entry points for generating semi-sequential UUIDs, a.k.a
  squuids
    
* use correct maven artifact ids: `datomic-free` for Datomic Free
  Edition, and `datomic-pro` for Datomic Pro Edition

* fixed bug where queries could see retracted values of a
  cardinality-many attribute

## Changes in 0.8.3335

Initial public release of Datomic Free Edition and Datomic Pro Edition
