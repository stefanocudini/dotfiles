#!/bin/bash
#
#
HEADER=$(head -1 $1)
if [ -n "$2" ]; then
    CHUNK=$2
else 
    CHUNK=1000
fi
tail -n +2 $1 | split -l $CHUNK - $1_split_
for i in $1_split_*; do
    sed -i -e "1i$HEADER" "$i"
echo "$i di $CHUNK"
done

