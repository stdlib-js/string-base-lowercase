/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import lowercase = require( './index' );


// TESTS //

// The function returns a string...
{
	lowercase( 'ABC' ); // $ExpectType "abc"
	lowercase( 'Beep BOOP' ); // $ExpectType "beep boop"
	lowercase( 'abc' as string ); // $ExpectType string
}

// The compiler throws an error if the function is provided a value other than a string...
{
	lowercase( true ); // $ExpectError
	lowercase( false ); // $ExpectError
	lowercase( null ); // $ExpectError
	lowercase( undefined ); // $ExpectError
	lowercase( 5 ); // $ExpectError
	lowercase( [] ); // $ExpectError
	lowercase( {} ); // $ExpectError
	lowercase( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	lowercase(); // $ExpectError
}
