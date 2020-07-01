alert("funcionou!");

function consultaCEP(){
    var cep = document.getElementById("cep").value;
    var endereco = "http://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: endereco,
        type: "GET",
        success: function(response){
            console.log(response);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //ou
            $("#logradouro").html(response.logradouro);

            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;

        }
    })
}
