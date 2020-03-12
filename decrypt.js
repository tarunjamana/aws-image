
const Cryptr = require("cryptr");
let key = new Cryptr('412a43d734948e031ed6896f1f4648c61328ce3f980568bb316df6dabf1e1b09');

async function dcrypt() {
  
    let cardNumber = key.decrypt('73922a27612f26cd68c421f728f07fafc684bbe1a148870c57484aba213d664ace9a40e843c3c2d6e3e43ce5cf87c69bd56c5e8088796789c18026932c3b0e7fe467d0a89f62102a91b3fe20536cc6eb0270d68e5825b6a0eb00a4ce62dd9001aa9d2dd45214e3bb81aca185243288c2');
    console.log(cardNumber);
    // console.log(cardNumber);
    // console.log(cipherVal);
  
}

dcrypt();