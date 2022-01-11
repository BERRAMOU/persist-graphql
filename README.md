# graphql-persist

## Overview

This is a command line tool to scan your ".graphql" files, and then build a `map` json file, which can be used as `persisted query` later on.

Similar to https://github.com/zzdjk6/graphql-extractor besides using simple ids instead of uuid and no graphql compression.

## How to use?

```bash
npm install -g graphql-persist

graphql-persist ./tests/fixtures/ ./tests/output/extracted_queries.json
```

## Example

see "tests/fixtures" for example ".graphql" files and "tests/output" for example `extracted_queries.json`.
