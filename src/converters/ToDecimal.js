export const toDecimal=(curNumber,curBase)=>{
    const decimalConversion= parseInt(curNumber, curBase).toString(10);
    return decimalConversion;
}
export default toDecimal;
