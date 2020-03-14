#!/bin/bash

if [[ ! -f "$2" ]]; then
  echo "SHA1 does not exist"

  exit 1
fi

SHA1_OLD="$(cat "$2")"
SHA1_NEW="$(find "$1" -type f -print0 | sort -z | xargs -0 sha1sum | sha1sum)"

echo "Old SHA1: '$SHA1_OLD'"
echo "New SHA1: '$SHA1_NEW'"

if [[ "$SHA1_OLD" != "$SHA1_NEW" ]]; then
  echo "SHA1 does not match. Please, run 'npm run build'"

  exit 1
fi

echo "SHA1 do match. OK"
