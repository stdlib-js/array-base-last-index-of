"use strict";var c=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var s=c(function(O,u){
var o=require('@stdlib/array-base-arraylike2object/dist');function f(r,t){return typeof r[t]=="function"}function l(r,t,e){var i;for(i=e;i>=0;i--)if(t===r[i])return i;return-1}function v(r,t,e){var i,n,a;for(i=r.data,n=r.accessors[0],a=e;a>=0;a--)if(t===n(i,a))return a;return-1}function g(r,t,e){var i;if(f(r,"lastIndexOf"))return r.lastIndexOf(t,e);if(e<0){if(e+=r.length,e<0)return-1}else e>r.length&&(e=r.length-1);return i=o(r),i.accessorProtocol?v(i,t,e):l(r,t,e)}u.exports=g
});var h=s();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
