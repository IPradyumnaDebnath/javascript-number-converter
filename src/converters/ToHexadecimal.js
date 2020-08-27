export const toHexadecimal=(curNumber,curBase)=>{
    const hexaDecimalConversion= parseInt(curNumber, curBase).toString(16);
    return hexaDecimalConversion;
}
export default toHexadecimal;
