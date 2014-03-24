# SESSION

Session is a live-coding environment, based on Clojure, Om, and Datomic. You can think of it as a web-based REPL, backed by a database.

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

Copyright (C) 2012 Kovas Boguta

Distributed under the Eclipse Public License, the same as Clojure.
