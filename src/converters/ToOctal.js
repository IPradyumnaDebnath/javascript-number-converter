export const toOctal=(curNumber,curBase)=>{
    const octalConversion= parseInt(curNumber, curBase).toString(8);
    return octalConversion;
}
export default toOctal;