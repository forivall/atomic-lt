#!/usr/bin/env node

const createWriteStreamAtomic = require('fs-write-stream-atomic');

process.stdin.pipe(createWriteStreamAtomic(process.argv[2]));
