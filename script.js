let ampm = document.getElementById('ampm')
function displayTime(){
    let datetime = new Date();
    let hr = datetime.getHours();
    let mins = padzero(datetime.getMinutes());
    let sec = padzero(datetime.getSeconds());

    if(hr > 12){
        hr = hr - 12;
        ampm.innerHTML = 'PM';
    }
    document.getElementById('hours').innerHTML = padzero(hr);
    document.getElementById('mins').innerHTML = mins;
    document.getElementById('seconds').innerHTML = sec;
    
}

function padzero(num){
    return num<10?"0"+num:num;
}

setInterval(displayTime,1000)