//dura un mes
function createCookie(name,value){
  const time = new Date()
  time.setTime(time.getTime()+(30*86400000));
  const UTCtime = time.toUTCString()
  document.cookie = name +"="+value+";"+"expires="+UTCtime+";path=/";
  return "creada"
}
function getCookie(cookie) {
  let x;
  let i;
  let comprobación;
  
  let name = cookie + "=";
  let dc = document.cookie.split(";");
  console.log("-------------------------------"+"\n"+"BUSCANDO COOKIE ->")
  for (i=0;i<dc.length;i++){
    busca = dc[i].indexOf(name)
    console.log("busqueda indice :"+i+ " " + busca+" "+dc[i])
    if (busca == 1){
      x = i
      comprobación = true
    }
  }
  if(comprobación==true){
  const resultado = dc[x]
  const valor = resultado.split("=")
  return valor[1]
  }else{
    return undefined
  }
}




