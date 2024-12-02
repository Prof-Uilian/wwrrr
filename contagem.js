function updateTimer() {
    const startDate = new Date("2024-11-10T18:00:00"); // Data de referência
    const now = new Date(); // Data atual
  
    const elapsed = now - startDate; // Diferença em milissegundos
  
    // Conversões de tempo
    const seconds = Math.floor((elapsed / 1000) % 60);
    const minutes = Math.floor((elapsed / 1000 / 60) % 60);
    const hours = Math.floor((elapsed / 1000 / 60 / 60) % 24);
    const days = Math.floor(elapsed / 1000 / 60 / 60 / 24);
  
    // Atualiza os elementos na página
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  // Atualiza o timer a cada segundo
  setInterval(updateTimer, 1000);
  
  // Inicializa o timer imediatamente ao carregar a página
  updateTimer();
  