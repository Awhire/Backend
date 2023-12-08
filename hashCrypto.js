import crypto from 'crypto'

const algorithm = 'sha256';
// sha stands for Standard Hash Algorithm
const key = crypto.randomBytes(32);

const hash = crypto.createHash(algorithm, key).update('test').digest('hex')
const hash1 = crypto.createHash(algorithm, key).update('test').digest('hex')
console.log(hash)
console.log(hash1)


// Hashing works for situations where we do not want to be able to decrypt the data. We want the process where we can take input, run it through algorithm and get an output that is the same as the output we got.
// Need for Hashing, To restore data like passwords.
//  1. We do not want the password to be stored in normal text format cos if somebody compromises where password is stored, they can hack the account. 2. Hashing is used to protect the data and alsoo to verify if a password is correct.
