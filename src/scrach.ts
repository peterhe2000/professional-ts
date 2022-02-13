type Address = [
  streeNo: number,
  city: string
]

function printAddress(...address: Address)  {}
printAddress(123, '123')

type Corner = `${ 'top' | 'bottom'}-${ 'left' | 'right'}`;

//@ts-expect-error
const num: number = 'a';

function somethingRisky() {}
try {
  somethingRisky();
} catch(err: unknown) {
  if (err instanceof Error) {
    console.log(err.stack)
  }
  else {
    console.log(err);
  }
}

//tsconfig
// add "checkJs": true // this will check type for Js as well

// This is referring a type from another module without saying I actually need that value.
import type { useAsyncDataEffect } from '../src/utils/api';
