document.getElementById('calcForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o formulário de ser enviado

  // Captura os valores dos campos de entrada
  const percuso = parseFloat(document.getElementById('percuso').value);
  const velocidade = parseFloat(document.getElementById('velocidade').value);

  // Verifica se os valores são válidos
  if (isNaN(percuso) || isNaN(velocidade) || percuso <= 0 || velocidade <= 0) {
      alert('Por favor, insira valores válidos para o percurso e a velocidade.');
      return;
  }

  // Calcula o tempo em horas decimais
  const tempoHoras = percuso / velocidade;

  // Converte o tempo para horas, minutos e segundos
  const horas = Math.floor(tempoHoras);
  const minutos = Math.floor((tempoHoras - horas) * 60);
  const segundos = Math.round(((tempoHoras - horas) * 60 - minutos) * 60);

  // Garante que os segundos não ultrapassem 59 (ajusta minutos e horas se necessário)
  if (segundos === 60) {
      minutos += 1;
      segundos = 0;
  }
  if (minutos === 60) {
      horas += 1;
      minutos = 0;
  }

  // Formata o resultado no formato hh:mm:ss
  const horasFormatadas = String(horas).padStart(2, '0');
  const minutosFormatados = String(minutos).padStart(2, '0');
  const segundosFormatados = String(segundos).padStart(2, '0');
  const resultadoCompleto = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;

  // Atualiza o valor do input com o resultado formatado
  const timeMedInput = document.getElementById('time_med');
  timeMedInput.value = resultadoCompleto;
});
