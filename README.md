# SESSION

Session is a live-coding environment, based on Clojure, Om, and Datomic. You can think of it as a web-based REPL, backed by a database.

Check out the [video](https://vimeo.com/89899023) and [introductory blog post.](https://medium.com/p/1a12997a5f70)

Join the [mailing list.](https://groups.google.com/forum/#!forum/session-platform)

# Usage

Make you sure have Leiningen installed. 

Clone the repo, and cd into it:

    git clone https://github.com/kovasb/session.git
    cd session

Launch session with the default port 8080:

    lein run

Launch session with a custom port:

    lein run "{:web-port 8090}"

Use Chrome to navigate to the port on localhost.

Check out the example session for the kinds of operations currently supported.

# Datomic "Gotcha"

Make sure there is no pre-existing Datomic transactor already running when launching Session. If Session fails to run, check to see there is no other datomic transactor running. 

Session tries to manage its own instance of the datomic transactor. When you close the Session process, this transactor may not be automatically killed. 

Session uses the transactor in a somewhat unorthodox use case, so the hooks provided by datomic are not ideal for managing it in this way. Pull requests welcome to improve the situation.

## License

Session includes Datomic Free Edition, which is governed by [this license](https://github.com/kovasb/session/blob/master/vendor/datomic-free-0.9.4556/LICENSE)

Session itself is Copyright (C) 2014 Kovas Boguta

Distributed under the Eclipse Public License, the same as Clojure.
