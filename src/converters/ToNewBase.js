export const toNewBase=(curNumber,curBase,newBase)=>{
    const newBaseConversion= parseInt(curNumber, curBase).toString(newBase)
    return newBaseConversion;
}
export default toNewBase;

