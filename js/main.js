function consultaCEP(){
    $(".barraProgresso").show();
    var cep = document.getElementById("cep").value;
    var endereco = "http://viacep.com.br/ws/" + cep + "/json/";
    console.log(endereco);
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
            $("#titulo").html("CEP: "+response.cep);
            $(".cep").show();
        }
    })
}
$(function(){
    $(".cep").hide();
    $(".barraProgresso").hide();
});
