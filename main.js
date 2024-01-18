const countdown = () => {

// prendo la data di oggi
const dataOggi = new Date().getTime()

// prendo la data di domani
const dataDomani = new Date ("January 19, 2024 09:30:00").getTime()

// sottraggo quanto manca da oggi a domani
let giornoMancanti = dataDomani - dataOggi

const secondi = 1000
const minuti = secondi * 60
const ore = minuti * 60
const giorni = ore * 24

const timeGiorni = Math.floor(giornoMancanti / giorni)
const timeOre = Math.floor((giornoMancanti % giorni) / ore)
const timeMinuti = Math.floor((giornoMancanti % ore) / minuti)
const timeSecondi = Math.floor((giornoMancanti % minuti) / secondi)


document.getElementById("ore").innerHTML = timeOre
document.getElementById("minuti").innerHTML = timeMinuti
document.getElementById("secondi").innerHTML = timeSecondi
}


setInterval(countdown, 1000)








