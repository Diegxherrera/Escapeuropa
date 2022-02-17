let seleccion1 = false;
        let seleccion2 = false;
        function admin_cerrar(){
            document.getElementById("admin_container_all").style.visibility = "hidden";
        }

        function admin_seleccionar(){
            if(seleccion1 === false){
            document.getElementById("admin_killer").style.backgroundColor = "lightblue";
            document.getElementById("admin_cpu_killer").style.backgroundColor = "lightblue";
            document.getElementById("admin_memoria_killer").style.backgroundColor = "lightblue";
            document.getElementById("admin_disco_killer").style.backgroundColor = "lightblue";
            document.getElementById("admin_red_killer").style.backgroundColor = "lightblue";
            document.getElementById("admin_gpu_killer").style.backgroundColor = "lightblue";
            seleccion1 = true
            }
        }

        function admin_seleccionar2(){
            if(seleccion2 === false){
            document.getElementById("admin_funny").style.backgroundColor = "lightblue";
            document.getElementById("admin_cpu_funny").style.backgroundColor = "lightblue";
            document.getElementById("admin_memoria_funny").style.backgroundColor = "lightblue";
            document.getElementById("admin_disco_funny").style.backgroundColor = "lightblue";
            document.getElementById("admin_red_funny").style.backgroundColor = "lightblue";
            document.getElementById("admin_gpu_funny").style.backgroundColor = "lightblue";
            seleccion2 = true
            }
        }

        function admin_finalizartarea(){
            if(seleccion1 & seleccion2 === true){
                document.getElementById("admin_killer").style.backgroundColor = "rgba(242,38,52,0.8)";
                document.getElementById("admin_cpu_killer").style.backgroundColor = "rgba(242,38,52,0.8)";
                document.getElementById("admin_memoria_killer").style.backgroundColor = "rgba(242,38,52,0.8)";
                document.getElementById("admin_disco_killer").style.backgroundColor = "rgba(242,38,52,0.8)";
                document.getElementById("admin_red_killer").style.backgroundColor = "rgba(242,38,52,0.8)";
                document.getElementById("admin_gpu_killer").style.backgroundColor = "rgba(242,38,52,0.8)";

                document.getElementById("admin_cpu_killer").innerHTML = "ERROR";
                document.getElementById("admin_memoria_killer").innerHTML = "ERROR";
                document.getElementById("admin_disco_killer").innerHTML = "ERROR";
                document.getElementById("admin_red_killer").innerHTML = "ERROR";
                document.getElementById("admin_gpu_killer").innerHTML = "ERROR";

                document.getElementById("admin_funny").style.backgroundColor = "rgba(242,38,52,0.8)";
                document.getElementById("admin_cpu_funny").style.backgroundColor = "rgba(242,38,52,0.8)";
                document.getElementById("admin_memoria_funny").style.backgroundColor = "rgba(242,38,52,0.8)";
                document.getElementById("admin_disco_funny").style.backgroundColor = "rgba(242,38,52,0.8)";
                document.getElementById("admin_red_funny").style.backgroundColor = "rgba(242,38,52,0.8)";
                document.getElementById("admin_gpu_funny").style.backgroundColor = "rgba(242,38,52,0.8)";

                document.getElementById("admin_cpu_funny").innerHTML = "ERROR";
                document.getElementById("admin_memoria_funny").innerHTML = "ERROR";
                document.getElementById("admin_disco_funny").innerHTML = "ERROR";
                document.getElementById("admin_red_funny").innerHTML = "ERROR";
                document.getElementById("admin_gpu_funny").innerHTML = "ERROR";

                document.getElementById("admin_titulo1").innerHTML = "Aplicaciones (ERROR)";
                document.getElementById("admin_porciento68").innerHTML = "ERROR";
                document.getElementById("admin_porciento85").innerHTML = "ERROR";
                document.getElementById("admin_porciento01").innerHTML = "ERROR";
                document.getElementById("admin_porciento02").innerHTML = "ERROR";
                document.getElementById("admin_porciento03").innerHTML = "ERROR";
                document.getElementById("admin_errortext").style.display = "block";

                document.getElementById("admin_container_all").style.animationPlayState = "running"
                
            }
            else{
                alert("Selecciona los dos virus")
            }
        }