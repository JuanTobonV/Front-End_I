
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";


  let puntajeBuenas = 0;
  let puntajeMalas = 0;

  document.querySelectorAll('#pregunta').forEach( elemento => {
    elemento.value === '1' ? puntajeBuenas++:puntajeMalas++
  })

  document.getElementById('respuesta').innerText = `Obtuvo un puntaje de ${puntajeBuenas} buenas y ${puntajeMalas} malas`;

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





