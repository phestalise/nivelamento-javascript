// Parte A — Escopo
let app = "MinhaApp";

function mostrarInfo() {
  let versao = "1.0";
  console.log(app);
  console.log(versao);
}

mostrarInfo();

console.log(app);



// Parte B — Callback
function executarTarefa(nomeTarefa, callback) {
  console.log("Iniciando: " + nomeTarefa);
  callback();
}

executarTarefa("Backup", () => {
  console.log("Tarefa concluída!");
});


// Parte C — Async
async function buscarPerfil() {
  return "Perfil carregado: Usuário Padrão";
}

buscarPerfil().then(console.log);