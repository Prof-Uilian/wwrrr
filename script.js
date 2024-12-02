function yesClicked() {
    alert('Sabia que você diria sim! 😊');
  }
  
  function moveButton() {
    const button = document.getElementById('no');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  }
  