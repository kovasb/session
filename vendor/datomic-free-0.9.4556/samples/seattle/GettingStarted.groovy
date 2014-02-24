// Copyright (c) Cognitect, Inc.
// All rights reserved.

/*
 * This file contains code examples for getting-started.html. They are
 * written in Groovy, for use with the included Groovy shell. You can
 * start the shell by running 'bin/groovysh' from the Datomic directory.
 * Once the Groovy shell is running, you can copy the code below into it.
 */

import java.io.FileReader

import datomic.Peer
import datomic.Connection
import datomic.Util

println "Creating and connecting to database..."
uri = "datomic:mem://seattle"
Peer.createDatabase(uri)
conn = Peer.connect(uri)

println "Parsing schema edn file and running transaction..."

schema_rdr = new FileReader("samples/seattle/seattle-schema.edn")
schema_tx = Util.readAll(schema_rdr).get(0)
txResult = conn.transact(schema_tx).get()
println txResult

println "Parsing seed data edn file and running transaction..."

data_rdr = new FileReader("samples/seattle/seattle-data0.edn")
data_tx = Util.readAll(data_rdr).get(0)
data_rdr.close()
txResult = conn.transact(data_tx).get()

println "Finding all communities, counting results..."

results = Peer.q("[:find ?c :where [?c :community/name]]", conn.db())
println results.size()

println "Getting first entity id in results, making entity map, displaying keys..."

results = Peer.q("[:find ?c :where [?c :community/name]]", conn.db())
id = results.iterator().next().get(0)
entity = conn.db().entity(id)
println entity.keySet()

println "Displaying the value of the entity's community name..."

println entity.get(":community/name")

println "Getting name of each community (some may appear more than because multiple online communities share the same name)..."

db = conn.db()
for (result in results) {
  entity = db.entity(result.get(0))
  println entity.get(":community/name")
}

println '''Getting communities\' neighborhood names (there are duplicates because
multiple communities are in the same neighborhood...''';

db = conn.db()
for (result in results) {
  entity = db.entity(result.get(0))
  neighborhood = entity.get(":community/neighborhood")
  println neighborhood.get(":neighborhood/name")
}

println "Getting names of all communities in first community's neighborhood..."

community = conn.db().entity(results.iterator().next().get(0))
neighborhood = community.get(":community/neighborhood")
communities = neighborhood.get(":community/_neighborhood")
for (comm in communities) {
  println comm.get(":community/name")
}

println "Find all communities and their names..."

results = Peer.q("[:find ?c ?n :where [?c :community/name ?n]]", conn.db())
for (result in results) println(result.get(1))

println "Find all community names and urls..."

results = Peer.q("[:find ?n ?u :where [?c :community/name ?n][?c :community/url ?u]]", conn.db())
for (result in results) println(result)

println "Find all categories for community named \"belltown\"..."

results = Peer.q(
  '''[:find ?e ?c
      :where [?e :community/name "belltown"]
             [?e :community/category ?c]]''',
  conn.db());
for (result in results) println(result)

println("Find names of all communities that are twitter feeds...")

results = Peer.q(
  '''[:find ?n
      :where [?c :community/name ?n]
             [?c :community/type :community.type/twitter]]''',
  conn.db());
for (result in results) println(result)

println "Find names of all communities that are in a neighborhood in a district in the NE region..."

results = Peer.q('''[:find ?c_name
                     :where
                     [?c :community/name ?c_name]
                     [?c :community/neighborhood ?n]
                     [?n :neighborhood/district ?d]
                     [?d :district/region :region/ne]]''',
                 conn.db());
for (result in results) println(result)

println "Find community names and region names for of all communities..."

results = Peer.q('''[:find ?c_name ?r_name
                     :where
                     [?c :community/name ?c_name]
                     [?c :community/neighborhood ?n]
                     [?n :neighborhood/district ?d]
                     [?d :district/region ?r]
                     [?r :db/ident ?r_name]]''',
                 conn.db());
for (result in results) println(result)

println '''Find all communities that are twitter feeds and facebook pages using
the same query and passing in type as a parameter...''';

query_by_type =
  '''[:find ?n
      :in $ ?t
      :where
      [?c :community/name ?n]
      [?c :community/type ?t]]''';
results = Peer.q(query_by_type,
                 conn.db(),
                 ":community.type/twitter");
for (result in results) println(result)

results = Peer.q(query_by_type,
                 conn.db(),
                 ":community.type/facebook-page");
for (result in results) println(result)

println '''Find all communities that are twitter feeds or facebook pages using
one query and a list of individual parameters...'''

results = Peer.q('''[:find ?n ?t :in $ [?t ...]
                     :where
                     [?c :community/name ?n]
                     [?c :community/type ?t]]''',
                 conn.db(),
                 [":community.type/facebook-page",
                  ":community.type/twitter"]);
for (result in results) println(result)

println '''Find all communities that are non-commercial email-lists or commercial
web-sites using a list of tuple parameters...'''

results = Peer.q('''[:find ?n ?t ?ot
                     :in $ [[?t ?ot]]
                     :where
                     [?c :community/name ?n]
                     [?c :community/type ?t]
                     [?c :community/orgtype ?ot]]''',
                 conn.db(),
                 [[":community.type/email-list",
                   ":community.orgtype/community"],
                  [":community.type/website",
                   ":community.orgtype/commercial"]]);
for (result in results) println(result)

println "Find all community names coming before \"C\" in alphabetical order..."

results = Peer.q('''[:find ?n
                     :where
                     [?c :community/name ?n]
                     [(.compareTo ?n \"C\") ?res]
                     [(< ?res 0)]]''',
                 conn.db());
for (result in results) println(result)

println "Find all communities whose names include the string \"Wallingford\"..."

results = Peer.q('''[:find ?n
                     :where
                     [(fulltext $ :community/name "Wallingford") [[?e ?n]]]]''',
                 conn.db());
for (result in results) println(result)

println '''Find all communities that are websites and that are about food,
passing in type and search string as parameters...'''

results = Peer.q('''[:find ?name ?cat
                     :in $ ?type ?search
                     :where
                     [?c :community/name ?name]
                     [?c :community/type ?type]
                     [(fulltext $ :community/category ?search) [[?c ?cat]]]]''',
                 conn.db(),
                 ":community.type/website",
                 "food");
for (result in results) println(result)

println "Find all names of all communities that are twitter feeds, using rules..."

rules = '''[[[twitter ?c]
            [?c :community/type :community.type/twitter]]]''';
results = Peer.q('''[:find ?n :in $ %
                     :where
                     [?c :community/name ?n]
                     (twitter ?c)]''',
                 conn.db(),
                 rules);
for (result in results) println(result)

println '''Find names of all communities in NE and SW regions, using rules
to avoid repeating logic...'''

rules = '''[[[region ?c ?r]
            [?c :community/neighborhood ?n]
            [?n :neighborhood/district ?d]
            [?d :district/region ?re]
            [?re :db/ident ?r]]]''';
results = Peer.q('''[:find ?n :in $ %
                     :where
                     [?c :community/name ?n]
                     (region ?c :region/ne)]''',
                 conn.db(),
                 rules);
for (result in results) println(result)
results = Peer.q('''[:find ?n :in $ %
                     :where
                     [?c :community/name ?n]
                     (region ?c :region/sw)]''',
                 conn.db(),
                 rules);
for (result in results) println(result)

println '''Find names of all communities that are in any of the southern
regions and are social-media, using rules for OR logic...'''
rules = '''[[[region ?c ?r]
             [?c :community/neighborhood ?n]
             [?n :neighborhood/district ?d]
             [?d :district/region ?re]
             [?re :db/ident ?r]]
            [[social-media ?c]
             [?c :community/type :community.type/twitter]]
            [[social-media ?c]
             [?c :community/type :community.type/facebook-page]]
            [[northern ?c] (region ?c :region/ne)]
            [[northern ?c] (region ?c :region/n)]
            [[northern ?c] (region ?c :region/nw)]
            [[southern ?c] (region ?c :region/sw)]
            [[southern ?c] (region ?c :region/s)]
            [[southern ?c] (region ?c :region/se)]]''';

results = Peer.q('''[:find ?n :in $ %
                     :where
                     [?c :community/name ?n]
                     (southern ?c)
                     (social-media ?c)]''',
                 conn.db(),
                 rules);
for (result in results) println(result)

println "Find all database transactions..."

results = Peer.q("[:find ?when :where [?tx :db/txInstant ?when]]",
                 conn.db());

println '''Sort transactions by time they occurred, then
pull out date when seed data load transaction and
schema load transactions were executed...''';

tx_dates = []
for (result in results) tx_dates.add(result.get(0))
Collections.sort(tx_dates)
Collections.reverse(tx_dates)
data_tx_date = tx_dates.get(0)
schema_tx_date = tx_dates.get(1)

println '''Make query to find all communities, use with database
values as of and since different points in time...''';

println "\nFind all communities as of schema transaction..."
db_asOf_schema = conn.db().asOf(schema_tx_date)
println Peer.q("[:find ?c :where [?c :community/name]]", db_asOf_schema).size()

println "\nFind all communities as of seed data transaction..."
db_asOf_data = conn.db().asOf(data_tx_date)
println Peer.q("[:find ?c :where [?c :community/name]]", db_asOf_data).size()

println "\nFind all communities since schema transaction..."
db_since_schema = conn.db().since(schema_tx_date)
println Peer.q("[:find ?c :where [?c :community/name]]", db_since_schema).size()

println "\nFind all communities since seed data transaction..."
db_since_data = conn.db().since(data_tx_date)
println Peer.q("[:find ?c :where [?c :community/name]]", db_since_data).size()

println "Parse additional seed data file..."

data_rdr = new FileReader("samples/seattle/seattle-data1.edn")
new_data_tx = Util.readAll(data_rdr).get(0)

println "\nFind all communities if new data is loaded..."
report = conn.db().with(new_data_tx)
db_if_new_data = report.get(Connection.DB_AFTER)
println Peer.q("[:find ?c :where [?c :community/name]]", db_if_new_data).size()

println "\nFind all communities currently in database..."
println Peer.q("[:find ?c :where [?c :community/name]]", conn.db()).size()

println "\nSubmit new data transaction..."
txResult = conn.transact(new_data_tx).get()

println "\nFind all communities currently in database..."
println Peer.q("[:find ?c :where [?c :community/name]]", conn.db()).size()

println "\nFind all communities since original seed data load transaction..."
db_since_data = conn.db().since(data_tx_date)
println Peer.q("[:find ?c :where [?c :community/name]]", db_since_data).size()

println "Make a new partition..."

partition_tx = [["db/id": Peer.tempid(":db.part/db"),
                 "db/ident": ":communities",
                 "db.install/_partition": "db.part/db"]];
txResult = conn.transact(partition_tx).get()
println txResult

println "Make a new community..."

add_community_tx = [[":db/id": Peer.tempid(":communities"),
                     ":community/name": "Easton"]];
txResult = conn.transact(add_community_tx).get()
println txResult

println("Update data for a community...");

results = Peer.q("[:find ?id :where [?id :community/name \"belltown\"]]",
                 conn.db());
belltown_id = results.iterator().next().get(0)

update_category_tx = [[":db/id": belltown_id,
                       ":community/category": "free stuff"]];
txResult = conn.transact(update_category_tx).get()
println txResult

println "Retract data for a community..."

retract_category_tx = [[":db/retract", belltown_id, ":community/category", "free stuff"]];
txResult = conn.transact(retract_category_tx).get()
println txResult

println "Retract a community entity..."

results = Peer.q("[:find ?id :where [?id :community/name \"Easton\"]]",
                 conn.db());
easton_id = results.iterator().next().get(0)

retract_entity_tx = [[":db.fn/retractEntity", easton_id]]
txResult = conn.transact(retract_category_tx).get()
println txResult

println "Get transaction report queue, add new community again..."

queue = conn.txReportQueue()

add_community_tx = [[":db/id": Peer.tempid(":communities"),
                     ":community/name": "Easton"]];

txResult = conn.transact(add_community_tx).get()
println txResult

println "Poll queue for transaction notification, print data that was added..."

report = queue.poll()
results = Peer.q('''[:find ?e ?aname ?v ?added
                     :in $ [[?e ?a ?v _ ?added]]
                     :where
                     [?e ?a ?v _ ?added]
                     [?a :db/ident ?aname]]''',
                 report.get(Connection.DB_AFTER),
                 report.get(Connection.TX_DATA));
for (result in results) println result
Peer.shutdown(true)
