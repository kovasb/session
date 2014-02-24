#!/bin/bash

echo "About to blindly kill all processes on your system with infinispan-mem-distributed in their name..."
ps -ax | grep [i]nfinispan-mem-distributed | grep java | awk '{print $1}' | xargs -I % sudo kill -9 %
