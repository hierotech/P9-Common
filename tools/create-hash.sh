#!/bin/bash

find "$1" -type f -print0 | sort -z | xargs -0 sha1sum | sha1sum > "$2"
