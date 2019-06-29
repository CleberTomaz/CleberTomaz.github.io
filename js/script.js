/*form cadastro*/
$('#myModal').on('shown.bs.modal', function() {
  $('#myInput').trigger('focus')
})




function salvar() {
  //Resgatar os campos
  var campoNome = document.getElementById("nome");
  var campoLogin = document.getElementById("login");
  var campoSenha = document.getElementById("senha");
  var campoConfirmar = document.getElementById("confirmarSenha");

  var nome = campoNome.value;
  var login = campoLogin.value;
  var senha = campoSenha.value;
  var confirmar = campoConfirmar.value;

  if (nome == "" || nome.length < 3) {
    alertaAviso("Preencha o campo nome! Mínimo 3 caracteres.");
  } else if (login == "" || login.length < 3) {
    alertaAviso("Preencha corretamente o campo Login! Mínimo 3 caracteres.");
  } else if (senha == "" || confirmar == "" || senha.length < 3 || senha.length > 6) {
    alertaErro("Preencha corretamente o campo Senha e Confirmar! A senha deve ter entre 3 a 6 caracteres.");
  } else if (senha != confirmar) {
    alertaErro("Preencha corretamente o campo Senha e Confirmar! Elas devem ser iguais.");
  } else {
    alertaSucesso("Cadastrado com sucesso");
  }

}

function alertaErro(msg) {
  $("#alerta_erro .texto").html(msg);
  $("#alerta_erro").slideDown(400).delay(2500).slideUp(400);
}

function alertaSucesso(msg) {
  $("#alerta_sucesso .texto").html(msg);
  $("#alerta_sucesso").slideDown(400).delay(2500).slideUp(400);
}

function alertaAviso(msg) {
  $("#alerta_aviso .texto").html(msg);
  $("#alerta_aviso").slideDown(400);
}

/*form cadastro*/
