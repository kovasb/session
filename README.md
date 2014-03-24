# SESSION

Session is a live-coding environment, based on Clojure, Om, and Datomic. You can think of it as a web-based REPL, backed by a database.

Check out the [video](https://vimeo.com/89899023) and [introductory blog post.](https://medium.com/p/1a12997a5f70)

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

## License

Session includes Datomic Free Edition, which is governed by [this license](https://github.com/kovasb/session/blob/master/vendor/datomic-free-0.9.4556/LICENSE)

Session itself is Copyright (C) 2014 Kovas Boguta

Distributed under the Eclipse Public License, the same as Clojure.
