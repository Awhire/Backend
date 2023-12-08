async function encrypt(plaintext){
    const key = await window.crypto.subtle.generateKey({
        name: 'AES-GCM',
        length: 256 
    }, true, ['encrypt', 'decrypt']);

    const encoder = new TextEncoder()

    const encode = encoder.encode(plaintext);
    const iv = window.crypto.getRandomValues(new Uint8Array(12));

    const cipher = await window.crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv: iv
    }, key, encode);

    const dicipher = await window.crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv: iv
    }, key, cipher);

    let decorder = new TextDecoder();
    let retDe = decorder.decode(dicipher);

    return {cipher, iv, retDe}

}


console.log(await encrypt('test'))

