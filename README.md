# SESSION

Session is a tool for social computation. 

If git lets us code together, Session lets us compute together.

More tangibly, it is a web-based clojure repl that stores the repl history in Datomic. 

Session lets you do data analysis, produce web content, stand up systems, and interact with services. You do those things by entering code and receiving results, which could be just data, but may also be things like graphics or interactive web content.

Importantly, Session also records the history of your actions and results. So you can come back to it, and see what happened. Or share it with others, so they can repeat it, or extend and adapt your work. 

Like git, the core of Session is an immutable datastructure that can easily be shared. Git showed that immutable data is ideal for facilitating peer networks. This is as true of networks of people, as it is of computer systems.

In Session, we commit not only the code, but also the result of executing the code. Having both code and result together is the foundation.

The second key element is the web UI. Session's UI lives on the web, as does the content it creates. This makes it easy to share what you've created, as well as the process of creation you used. It also provides an extensible foundation for rich visualization and interaction elements, which are important to any data manipulation workflow.

The third key element is coordinating the execution of computation. Session delegates execution to services, and can be used in any architecture. As it keeps track of the history of the computation, it can also track state and metadata associated with the services. This facilitates reproducibility, location independence, and shields user code from incidental complexity.

This combination of features allows Session to create easily sharable computations that are unrestricted in power.


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
