functfunction publishTrip(){

const rdv = document.getElementById("rdv-location").value
const price = Number(document.getElementById("driver-price").value)
const seats = Number(document.getElementById("seats").value)

if(!rdv || !price || !seats){
alert("Veuillez remplir tous les champs")
return
}

const commission = 0.1333
const driverReceives = Math.round(price * (1 - commission))
const total = driverReceives * seats

document.getElementById("result").innerHTML = `

📍 RDV : ${rdv} <br><br>

💰 Prix affiché : ${price.toLocaleString()} FCFA / personne <br><br>

💵 Conducteur reçoit : ${driverReceives.toLocaleString()} FCFA / passager <br><br>

🚗 Places : ${seats} <br><br>

📊 Gain potentiel : ${total.toLocaleString()} FCFA

`

}