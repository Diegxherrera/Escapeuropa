function createcookie(name,value){
  const time = new Date()
  time.setTime(time.getTime()+(30*86400000));
  const UTCtime = time.toUTCString()
  document.cookie = name +"="+value+";"+"expires="+UTCtime+";path=/";
  return "creada"
}

let x;
let i;
let comprobación;

function getCookie(cookie) {
  let name = cookie + "=";
  let dc = document.cookie.split(";");
  for (i=0;i<dc.length;i++){
    busca = dc[i].indexOf(name)
    if (busca == 1){
      x = i
      comprobación = true
    }
    i++
  }
  if(comprobación==true){
  const resultado = dc[x]
  const valor = resultado.split("=")
  return valor[1]
  }else{
    return undefined
  }
}



