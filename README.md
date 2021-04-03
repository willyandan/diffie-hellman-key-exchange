# Diffie Hellman Key Exchange
Simple implementation of DHKE using typescript

the prime and the generator number are from [RFC 3526](https://tools.ietf.org/html/rfc3526)

## Instaling
using NPM:  
```
npm i diffie-hellman-ts
```

using Yarn:
```
yarn add diffie-hellman-ts
```

## How to use
```typescript
import { Client } from 'diffie-hellman-ts'
const alice = new Client()
const bob = new Client()

const alicePublicsNumber = alice.generatePublicNumber()
const bobPublicsNumber = bob.generatePublicNumber()

const aliceBobSharedKey = alice.generateSharedSecret(bobPublicsNumber)
//const aliceBobSharedKey = bob.generateSharedSecret(alicePublicsNumber)
```
The Client class accept a MODP group id ([https://tools.ietf.org/html/rfc3526](https://tools.ietf.org/html/rfc3526)) to use as generator number and prime number.  
The default id is 14.
