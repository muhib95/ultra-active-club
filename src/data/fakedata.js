const setLocal=(data)=>{
localStorage.setItem('value',data);

}
const getLocal=()=>{
  const value=localStorage.getItem('value');
  return value;
}




export {setLocal,getLocal};