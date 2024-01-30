// 빌트인 객체

/*
// global (in nodejs)
console.log(globalThis);    // global object (node의 전역객체)
console.log(this);      // {}

console.log(globalThis === this);   // false
console.log(module.exports === this);   // node 전역스코프에서의 this

window (in browser)
console.log(window);
console.log(this);

console.log(window === this);
console.log('------------------------------------------------------------');
*/

// URI
let uri = 'http://google.com?name=죽겟다';

let encodedUri = encodeURI(uri);
console.log(encodedUri);

let decodedUri = decodeURI(encodedUri);
console.log(decodedUri);
console.log();

let encodedUriComp = encodeURIComponent(uri);
console.log(encodedUriComp);

let decodedUriComp = decodeURIComponent(encodedUriComp);
console.log(decodedUriComp);