import crypto from "crypto";

const algorithm = 'aes-256-cbc'
// aes : Advanced Encryption Standard.
// 256 : it indicate the size of the key, the larger the key, the stronger will be the encryption.
// cbc : Cipher Blocking Chaining: it the mode at which the encryption is run again.
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
    let encrypted = cipher.update(text)
    encrypted = Buffer.concat([encrypted, cipher.final()])

    return {iv: iv.toString('hex'), encryptedData: encrypted.toString('hex')}
}

function decrypt(text){
    let iv = Buffer.from(text.iv, 'hex')
    let encryptedText = Buffer.from(text.encryptedData, "hex");

    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv)
    let decrypted = decipher.update(encryptedText)
    decrypted = Buffer.concat([decrypted, decipher.final()])

    return decrypted.toString();
}

let output = encrypt('promising')
console.log(output)

console.log(decrypt(output))