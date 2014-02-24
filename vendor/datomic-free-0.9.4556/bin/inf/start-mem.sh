#!/bin/bash

D_CONFIG=`pwd`/`dirname "$0"`

bin/inf/startServer.sh -r hotrod -p 11222 -c $D_CONFIG/infinispan-mem.xml &

sleep 5

`dirname "$0"`/listall.sh

