// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";function e(e,n,s,f){var i;if(function(r,t){return"function"==typeof r[t]}(e,"lastIndexOf")&&!1===f)return e.lastIndexOf(n,s);if(s<0){if((s+=e.length)<0)return-1}else s>e.length&&(s=e.length-1);return(i=r(e)).accessorProtocol?function(r,e,n,s){var f,i,o;if(f=r.data,i=r.accessors[0],s&&t(e)){for(o=n;o>=0;o--)if(t(i(f,o)))return o;return-1}for(o=n;o>=0;o--)if(e===i(f,o))return o;return-1}(i,n,s,f):function(r,e,n,s){var f;if(s&&t(e)){for(f=n;f>=0;f--)if(t(r[f]))return f;return-1}for(f=n;f>=0;f--)if(e===r[f])return f;return-1}(e,n,s,f)}export{e as default};
//# sourceMappingURL=index.mjs.map
