function publishTrip() {
  const rdv = document.getElementById('rdv-location').value;
  const price = document.getElementById('driver-price').value;

  if (!rdv || !price) {
    alert('Veuillez remplir tous les champs');
    return;
  }

  const driverReceives = Math.round(price * 0.8667);

  alert("Trajet publié !");
}