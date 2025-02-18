 
export const getIntialValue = ()=>{
  return localStorage.getItem("counter") || 0;
}