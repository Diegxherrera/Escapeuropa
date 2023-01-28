  let x;  
  let i;  
  let comprobacion;
  
  function getCookie(cookie) {
    let x;
    let i;
    let comprobacion;
  
    let name = cookie + "=";
    let dc = document.cookie.split(";");
    console.log("-------------------------------"+"\n"+"BUSCANDO COOKIE ->");
    for (i=0;i<dc.length;i++){
      busca = dc[i].indexOf(name);
      console.log("busqueda indice :"+i+ " " + busca+" "+dc[i]);
      if (busca == 1){
        x = i;
        comprobacion = true;
      }
    }
    if(comprobacion==true){
    const resultado = dc[x];
    const valor = resultado.split("=");
    return valor[1];
    }else{
      return undefined;
    }
  }