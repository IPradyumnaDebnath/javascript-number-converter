import {toBinary} from '../converters/ToBinary';
import {toDecimal} from '../converters/ToDecimal';
import {toHexadecimal} from '../converters/ToHexadecimal';
import {toNewBase} from '../converters/ToNewBase';
import {toOctal} from '../converters/ToOctal';
import {toRoman} from '../converters/ToRoman'

test('toBinary conversion', () => {
 const decimalNum=15
 const binaryNum=toBinary(decimalNum,10)
 expect(binaryNum).toBe("1111")
 
});
test('toDecimal conversion', () => {
    const hexNum="F"
    const decimalNum=toDecimal(hexNum,16)
    expect(decimalNum).toBe("15")
});

test('toHexadecimal conversion', () => {
    const octalNum=17
    const hexNum=toHexadecimal(octalNum,8)
    expect(hexNum).toBe("f")
});
test('toOctal conversion', () => {
        const binaryNum=1111
        const octalNum=toOctal(binaryNum,2)
        expect(octalNum).toBe("17")
});
test('toRoman conversion', () => {
    const decimalNum=107
    const romanNum=toRoman(decimalNum,10)
    expect(romanNum).toBe("CVII")
});

test('toNewBase conversion', () => {
 const baseFiveNum=145
 const baseSevenNum=toNewBase(baseFiveNum,5,7)
 expect(baseSevenNum).toBe("12")
});