const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const hoje = document.getElementById('hoje');

const relogio = setInterval(function time() {
    let dataDeHoje = new Date();
    let hrs = dataDeHoje.getHours();
    let min = dataDeHoje.getMinutes();
    let sec = dataDeHoje.getSeconds();

    if (hrs < 10) hrs = '0' + hrs;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    horas.textContent = hrs;
    minutos.textContent = min;
    segundos.textContent = sec;

    let day = new Date().getDate();
    let month = dataDeHoje.getMonth();
    let year = dataDeHoje.getFullYear();

    switch (month) {
        case 0: month = "Janeiro";
            break;
        case 1: month = "Fevereiro";
            break; 
        case 2: month = "Marco";
            break;
        case 3: month = "Abril";
            break;
        case 4: month = "Maio";
            break;
        case 5: month = "Junho";
            break;
        case 6: month = "Julho";
            break;
        case 7: month = "Agosto";
            break;
        case 8: month = "Setembro";
            break;
        case 9: month = "Outubro";
            break;
        case 10: month = "Novembro";
            break;
        case 11: month  = "Dezembro";
            break;
    }

    hoje.textContent = day + ' de ' + month + ' de ' + year;
})