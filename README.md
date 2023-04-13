# Interopdata Node.js Library

[![Version](https://img.shields.io/npm/v/interopdata.svg)](https://www.npmjs.org/package/interopdata)
[![Downloads](https://img.shields.io/npm/dm/interopdata.svg)](https://www.npmjs.com/package/interopdata)
[![Try on RunKit](https://badge.runkitcdn.com/interopdata.svg)](https://runkit.com/npm/interopdata)

## Installation

Install the package with:

```sh
npm install interopdata --save
# or
yarn add interopdata
```

## Usage

The package needs to be configured with your account's secret key, which is
available in the Interopdata Dashboard. Require it with the key's
value:

<!-- prettier-ignore -->
```js
const interopdata = require('interopdata')('sk_live...');

interopdata.customers.create({
  id: 'customer-id'
})
  .then(customer => console.log(customer.id))
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```js
import Interopdata from 'interopdata';
const interopdata = new Interopdata('sk_live_...');

const customer = await interopdata.customers.create({
  id: 'customer-id'
});

console.log(customer);
```