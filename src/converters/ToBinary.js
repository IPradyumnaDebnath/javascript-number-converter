export const toBinary=(curNumber,curBase)=>{
   const binaryConversion= parseInt(curNumber, curBase).toString(2);
   return binaryConversion;
}

 export default toBinary;