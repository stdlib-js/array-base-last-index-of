// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function t(t,e,n){var f;if(function(r,t){return"function"==typeof r[t]}(t,"lastIndexOf"))return t.lastIndexOf(e,n);if(n<0){if((n+=t.length)<0)return-1}else n>t.length&&(n=t.length-1);return(f=r(t)).accessorProtocol?function(r,t,e){var n,f,o;for(n=r.data,f=r.accessors[0],o=e;o>=0;o--)if(t===f(n,o))return o;return-1}(f,e,n):function(r,t,e){var n;for(n=e;n>=0;n--)if(t===r[n])return n;return-1}(t,e,n)}export{t as default};
//# sourceMappingURL=index.mjs.map
