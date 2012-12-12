# SESSION

In progress. All aspects of the design and implemention are likely to change. There are many known issues.

See [Architecture](https://github.com/kovasb/session/wiki/Architecture) for a description of components and how they come together.

# Usage

Sample invocation:

    lein run 8090 datomic:mem://test

Then direct the browser to localhost:8090 . (Only verified to work with Chrome)

In general, supply the port and the datomic URI to connect to. For persistent results, you'll likely want set up and use a transactor with local storage.

To create input areas, mouse around the UI untill a right arrow appears, and click. An input area should appear.

To evaluate input, hit shift-enter.

## License

Copyright (C) 2012 Kovas Boguta

Distributed under the Eclipse Public License, the same as Clojure.
