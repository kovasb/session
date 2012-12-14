# SESSION

Session is a tool for social computation. 

If git lets us code together, Session lets us compute together.

More tangibly, Session is a web-based clojure repl that stores your repl session in Datomic. 

Like git, the core of Session is an immutable datastructure that can easily be shared. 

Git showed that immutable data is the foundation of social computation. Immutable data is not tied to a place, and thus provides the basis of a peer network.

In Session, we commit not only the code, but also the result of running the code. 

On top of this datastructure, Session provides a web-based UI for writing code and seeing the results.

This combination of features allows Session to create easily sharable computations that are unrestricted in power.

## Creating computations

The Session datastructure can be viewed as a database, narrative, or audit history of human-operated computation. 

As you are computing, a granular history of your operations is built up. These may include both the results, and metadata.

The results themselves are often the immediate goal of the operator -- you need to produce a piece of data or a visualization.

Session reduces the complexity of producing and delivering these results. 

Session lives natively on the web, minimizing friction for creating and delivering web content. Because session is also a database, it can be queried or plugged into a messaging system. Compute and publish.

Beyond creating specific results, Session manages their history.

Simply by remembering the details of what happened, Session eliminates a huge source of human error and confusion -- from overwriting files, to forgetting special cases.

It also gives us the opportunity to try to reproduce the result, modify the code to achieve a variation, or compute new things from the same basis.

This is relevant to many context, such as science, data journalism, business analytics, dev ops, and online education.

It also makes it possible to socially assemble sessions, in the same way we do with source code. For instance computations on open government data could be done collaboratively.

## Interfacing with Services

Session supports diverse and potentially large-scale use cases. It is designed to to maximize leverage of your existing architecture. It speaks in the language of the system.

Specifically, Session ensures that it does not bottleneck or limit the computations. It just orchestrates services, and records essentially metadata about what happened.

The degree to which the entire computation is recorded in session depends on the properties of the services & results.

A goal of session is to wrap services that are otherwise stateful or place-oriented, and insulate user code from getting entangled in them.

However, Session can be still very useful for recording interactions with stateful services, even if the results are not reproducible.

The purpose of the Session history is foremost for human understanding of the computation, particulary for the kinds of ambiguous situations that code cannot forsee.

When a human-operated computation throws an exception, the operator can investigate, reason, and take action -- so long as they have the neccessary context, eg, the history.

This makes Session a useful tool when dealing with messy, real-world systems. 

## UI

Session places greater constraints on UI than it does on the computations themselves. It is essential to be able to perceive a piece of data, without reproducing the universe in which the data was created. UI constructs created in session are therefore required to be values. 

However, they also have access to Datomic, and thus can deal in novelty.


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
