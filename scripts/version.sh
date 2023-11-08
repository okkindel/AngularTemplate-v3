#!/bin/bash

GIT_HASH=$(git rev-parse HEAD)
HASH_SHORT=${GIT_HASH:0:7}
TIME=$(date)
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

cat > ./src/assets/version.json <<EOF
{
    "commit_hash": "$GIT_HASH",
    "commit_short": "$HASH_SHORT",
    "build_time": "$TIME",
    "version": "$PACKAGE_VERSION" 
}
EOF
