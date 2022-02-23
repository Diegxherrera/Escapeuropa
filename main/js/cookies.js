//dura un mes
function create_long_cookie(name,value){
  //obtener dia de hoy + 30 dias
  const time = new Date()
  time.setTime(time.getTime()+(30*86400000));
  const UTCtime = time.toUTCString()
  //cookie = nombre=valor;expira=tiempo;ruta;
  document.cookie = name +"="+value+";"+"expires="+UTCtime+";path=/";
  return "creada"
}
//hasta que ce cierre el navegador
function create_short_cookie(name,value){
  document.cookie = name +"="+value+";";
  return "creada"
}

let x;
let i;
let comprobación;

function getCookie(cookie) {
  //obtener name real
  let name = cookie + "=";
  //crea un array desde las cookies del usuario
  let dc = document.cookie.split(";");
  //lee el arraay y lo recorre en busca de...
  for (i=0;i<dc.length;i++){
    //objetivo
    busca = dc[i].indexOf(name)
    //returns
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




