/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var AccessorArray = require( '@stdlib/array-base-accessor' );
var Float64Array = require( '@stdlib/array-float64' );
var Int32Array = require( '@stdlib/array-int32' );
var lastIndexOf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lastIndexOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the last index of an element which equals a provided search element (generic, equal_nans=false)', function test( t ) {
	var actual;
	var x;

	x = [ 1, 1, 2, 2, 3, 3 ];

	actual = lastIndexOf( x, 1, 5, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 2, 5, false );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = lastIndexOf( x, 3, 5, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Nonnegative starting index...
	actual = lastIndexOf( x, 1, 0, false );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = lastIndexOf( x, 2, 2, false );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = lastIndexOf( x, 3, 4, false );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = lastIndexOf( x, 3, 100, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = lastIndexOf( x, 1, -1, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 3, -2, false );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = lastIndexOf( x, 1, -5, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 2, -3, false );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = lastIndexOf( x, 3, -1, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns the last index of an element which equals a provided search element (float64, equal_nans=false)', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	actual = lastIndexOf( x, 1.0, 5, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 2.0, 5, false );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = lastIndexOf( x, 3.0, 5, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Nonnegative starting index...
	actual = lastIndexOf( x, 1.0, 0, false );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = lastIndexOf( x, 2.0, 2, false );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = lastIndexOf( x, 3.0, 4, false );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = lastIndexOf( x, 3.0, 100, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = lastIndexOf( x, 1.0, -1, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 3.0, -2, false );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = lastIndexOf( x, 1.0, -5, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 2.0, -3, false );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = lastIndexOf( x, 3.0, -1, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns the last index of an element which equals a provided search element (int32, equal_nans=false)', function test( t ) {
	var actual;
	var x;

	x = new Int32Array( [ 1, 1, 2, 2, 3, 3 ] );

	actual = lastIndexOf( x, 1, 5, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 2, 5, false );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = lastIndexOf( x, 3, 5, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Nonnegative starting index...
	actual = lastIndexOf( x, 1, 0, false );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = lastIndexOf( x, 2, 2, false );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = lastIndexOf( x, 3, 4, false );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = lastIndexOf( x, 3, 100, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = lastIndexOf( x, 1, -1, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 3, -2, false );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = lastIndexOf( x, 1, -5, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 2, -3, false );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = lastIndexOf( x, 3, -1, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns the last index of an element which equals a provided search element (accessors, equal_nans=false)', function test( t ) {
	var actual;
	var x;

	x = new AccessorArray( [ 1, 1, 2, 2, 3, 3 ] );

	actual = lastIndexOf( x, 1, 5, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 2, 5, false );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = lastIndexOf( x, 3, 5, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Nonnegative starting index...
	actual = lastIndexOf( x, 1, 0, false );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = lastIndexOf( x, 2, 2, false );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = lastIndexOf( x, 3, 4, false );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = lastIndexOf( x, 3, 100, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = lastIndexOf( x, 1, -1, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 3, -2, false );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = lastIndexOf( x, 1, -5, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 2, -3, false );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = lastIndexOf( x, 3, -1, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns the last index of an element which equals a provided search element (array-like, equal_nans=false)', function test( t ) {
	var actual;
	var x;

	x = {
		'length': 6,
		'0': 1,
		'1': 1,
		'2': 2,
		'3': 2,
		'4': 3,
		'5': 3
	};

	actual = lastIndexOf( x, 1, 5, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 2, 5, false );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = lastIndexOf( x, 3, 5, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Nonnegative starting index...
	actual = lastIndexOf( x, 1, 0, false );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = lastIndexOf( x, 2, 2, false );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = lastIndexOf( x, 3, 4, false );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = lastIndexOf( x, 3, 100, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = lastIndexOf( x, 1, -1, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 3, -2, false );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = lastIndexOf( x, 1, -5, false );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = lastIndexOf( x, 2, -3, false );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = lastIndexOf( x, 3, -1, false );
	t.strictEqual( actual, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an empty array', function test( t ) {
	var actual;
	var x;

	// Unequal NaNs...
	actual = lastIndexOf( [], 0, 0, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new Float64Array( [] ), 0, 0, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new Int32Array( [] ), 0, 0, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new AccessorArray( [] ), 0, 0, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = {
		'length': 0
	};
	actual = lastIndexOf( x, 0, 0, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Equal NaNs...
	actual = lastIndexOf( [], 0, 0, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new Float64Array( [] ), 0, 0, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new Int32Array( [] ), 0, 0, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new AccessorArray( [] ), 0, 0, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = {
		'length': 0
	};
	actual = lastIndexOf( x, 0, 0, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'when `equalNaNs` is `false`, the function returns `-1` if provided a search element equal to `NaN`', function test( t ) {
	var actual;
	var x;

	actual = lastIndexOf( [ NaN ], NaN, 0, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new Float64Array( [ NaN ] ), NaN, 0, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new AccessorArray( [ NaN ] ), NaN, 0, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = {
		'length': 1,
		'0': NaN
	};
	actual = lastIndexOf( x, NaN, 0, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'when `equalNaNs` is `true`, the function supports finding an element equal to `NaN`', function test( t ) {
	var actual;
	var x;

	actual = lastIndexOf( [ NaN ], NaN, 0, true );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = lastIndexOf( [ 0 ], NaN, 0, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new Float64Array( [ NaN ] ), NaN, 0, true );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = lastIndexOf( new Float64Array( [ 0.0 ] ), NaN, 0, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new AccessorArray( [ NaN ] ), NaN, 0, true );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = lastIndexOf( new AccessorArray( [ 0 ] ), NaN, 0, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = {
		'length': 1,
		'0': NaN
	};
	actual = lastIndexOf( x, NaN, 0, true );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = {
		'length': 1,
		'0': 0
	};
	actual = lastIndexOf( x, NaN, 0, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a starting index which exceeds the minimum array index', function test( t ) {
	var actual;
	var x;

	// Unequal NaNs...
	actual = lastIndexOf( [ 1, 2, 3 ], 0, -20, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new Float64Array( [ 1.0, 2.0, 3.0 ] ), 0, -20, false ); // eslint-disable-line max-len
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new Int32Array( [ 1, 2, 3 ] ), 0, -20, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new AccessorArray( [ 1, 2, 3 ] ), 0, -20, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = {
		'length': 0,
		'0': 1,
		'1': 2,
		'2': 3
	};
	actual = lastIndexOf( x, 0, -20, false );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Equal NaNs...
	actual = lastIndexOf( [ 1, 2, 3 ], 0, -20, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new Float64Array( [ 1.0, 2.0, 3.0 ] ), 0, -20, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new Int32Array( [ 1, 2, 3 ] ), 0, -20, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = lastIndexOf( new AccessorArray( [ 1, 2, 3 ] ), 0, -20, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = {
		'length': 0,
		'0': 1,
		'1': 2,
		'2': 3
	};
	actual = lastIndexOf( x, 0, -20, true );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
