var usuarios = {
    datos:[]
};

function serializar()
{
        var text = "";

        if($('#check').is(':checked')){
            
            text = $('#myform').serializeJSON();
            if (text.mail == "" || text.psw == "") {
                if(text.mail == "" && text.psw == "")
                     alert("Se necesitan llenar los campos");
                else if(text.mail == "")
                    alert("Campo para el correro no a sido completado");
                else if(text.psw == "")
                    alert("Campo de la contraseña no a sido completado");
            }
            else{
                //console.log(text);
                usuarios.datos.push({
                    "user" : text.mail,
                    "password" : text.psw
                });
                //alert(text.mail +"\n"+ text.psw);      
            }
        }
        else{
            alert("Acepte los terminos");
        }
}

function registro()
{
    document.getElementById("Registro").onclick = function () {
        location.href = "file:///C:/Users/Jordany/Documents/Git/Banana%20Gest/Registro.html";
    }
}

function serializarRegistro()
{
    
        var text = "";

        if($('#check').is(':checked')){
            
            text = $('#myform').serializeJSON();
            if (text.nombre == "" || text.mail == "" || text.psw == "" || text.validar_psw == "") {
                if(text.mail == "" && text.psw == "" && text.nombre == "" && text.validar_psw == "")
                     alert("Se necesitan llenar los campos");
                else if(text.mail == "")
                    alert("Campo para el correro no a sido completado");
                else if(text.psw == "")
                    alert("Campo de la contraseña no a sido completado");
                else if(text.validar_psw == "")
                    alert("Por favor valide su contraseña");
                else if(text.nombre == "")
                    alert("Campo de nombre no a sido completado");
            }
            else{
                console.log(text);
                alert(text.nombre +"\n"+ text.mail +"\n"+ text.psw+"\n"+ text.validar_psw);      
            }
        }
        else{
            alert("Acepte los terminos");
        }

        
                 
}