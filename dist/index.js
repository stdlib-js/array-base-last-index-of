"use strict";var a=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var s=a(function(q,u){
var f=require('@stdlib/assert-is-accessor-array/dist'),c=require('@stdlib/array-base-resolve-getter/dist');function l(r,t){return typeof r[t]=="function"}function o(r,t,e){var i;for(i=e;i>=0;i--)if(t===r[i])return i;return-1}function v(r,t,e){var i,n;for(i=c(r),n=e;n>=0;n--)if(t===i(r,n))return n;return-1}function g(r,t,e){if(l(r,"lastIndexOf"))return r.lastIndexOf(t,e);if(e<0){if(e+=r.length,e<0)return-1}else e>r.length&&(e=r.length-1);return f(r)?v(r,t,e):o(r,t,e)}u.exports=g
});var h=s();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
