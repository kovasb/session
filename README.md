# SESSION

Session is a tool for social computation. 

If git lets us code together, Session lets us compute together.

More tangibly, Session is a web-based clojure repl that stores your repl session in Datomic. 

Like git, the core of Session is an immutable datastructure that can easily be shared. 

The genius of git, which session emulates, is that immutable data enables peer networks of humans -- not just of computers.

Unlike git, Session executes the code and produces a result. Thus it comes with a UI, and makes a choice of programming language (Clojure.)

Content created in Session, as well as the process of creating it, can live natively on the web, and can be plugged into your other systems.

Session is designed to maximize leverage of your existing architecture. It doesn't execute your code itself; it just helps orchestrate the dataflow. It promotes, but does not enforce, programming with immutable values at the systems level.

The sequence of REPL interactions are persisisted, so you can continue an existing session - yours, or another's.  

Session persistence is meant first for human understanding of what happened, and secondarily for computational reconstruction. Computations can be annotated to facilitate both purposes, using datomic attributes, for instance with textual comments, or automatically recorded environment variables.

Session places greater constraints on UI than it does on the computations themselves. It is essential to be able to perceive a piece of data, without reproducing the universe in which the data was created. UI constructs created in session are therefore required to be values. However, they also have access to Datomic, and thus can deal in novelty.

This combination of properties allows Session to create easily sharable computations that are unrestricted in power. Computations are a more powerful artifact than either the source code or the resulting data on their own, and currently have no useful representation in any other tool. 

Currently alpha quality software, use at your own risk :)

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
