"use strict";var c=function(t,i){return function(){return i||t((i={exports:{}}).exports,i),i.exports}};var o=c(function(y,s){
var v=require('@stdlib/array-base-arraylike2object/dist'),a=require('@stdlib/math-base-assert-is-nan/dist');function l(t,i){return typeof t[i]=="function"}function g(t,i,n,e){var r;if(e&&a(i)){for(r=n;r>=0;r--)if(a(t[r]))return r;return-1}for(r=n;r>=0;r--)if(i===t[r])return r;return-1}function p(t,i,n,e){var r,f,u;if(r=t.data,f=t.accessors[0],e&&a(i)){for(u=n;u>=0;u--)if(a(f(r,u)))return u;return-1}for(u=n;u>=0;u--)if(i===f(r,u))return u;return-1}function O(t,i,n,e){var r;if(l(t,"lastIndexOf")&&e===!1)return t.lastIndexOf(i,n);if(n<0){if(n+=t.length,n<0)return-1}else n>t.length&&(n=t.length-1);return r=v(t),r.accessorProtocol?p(r,i,n,e):g(t,i,n,e)}s.exports=O
});var b=o();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
