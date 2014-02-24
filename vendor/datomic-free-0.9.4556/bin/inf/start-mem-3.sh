#!/bin/bash

D_CONFIG=`pwd`/`dirname "$0"`

echo "Launching 3 memory infinispan processes"

bin/inf/startServer.sh -r hotrod -p 11222 -c $D_CONFIG/infinispan-mem-distributed-1.xml &
sleep 2
bin/inf/startServer.sh -r hotrod -p 11223 -c $D_CONFIG/infinispan-mem-distributed-2.xml &
sleep 2
bin/inf/startServer.sh -r hotrod -p 11224 -c $D_CONFIG/infinispan-mem-distributed-3.xml &
sleep 2

`dirname "$0"`/listall.sh

