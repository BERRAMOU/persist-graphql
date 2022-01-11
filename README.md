# persist-graphql

## Overview

This is a command line tool to scan your ".graphql" files, and then build a `map` json file, which can be used as `persisted query` later on.

## How to use?

```bash
npm install -g persist-graphql

persist-graphql ./tests/fixtures/ ./tests/output/extracted_queries.json
```

## Example

see "tests/fixtures" for example ".graphql" files and "tests/output" for example `extracted_queries.json`.
