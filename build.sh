#!/bin/bash

# OPENAPI

OPENAPI_DEF="https://raw.githubusercontent.com/interopdata/openapi/main/openapi/spec3.json"

npx openapi-generator-cli -- generate -i $OPENAPI_DEF -g typescript-fetch -o src/generated-sources --additional-properties=supportsES6=true,npmVersion=6.9.0,typescriptThreePlus=true

# PATCHES
patch -p1 -i ./patches/000_localized_strings.patch

# TYPES
mkdir -p types
npx -- tsc -d --emitDeclarationOnly -p tsconfig.json --outDir ./types

# ESM
mkdir -p esm
npx -- tsc -p tsconfig.esm.json
echo '{"type":"module"}' > esm/package.json

# CJS
mkdir -p cjs
npx -- tsc -p tsconfig.json
echo '{"type":"commonjs"}' > cjs/package.json
