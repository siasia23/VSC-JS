


const time = setInterval(()=>{

    let seoulTime = new Date();

    let year = seoulTime.getFullYear();
    let month = seoulTime.getMonth();
    let date = seoulTime.getDate();
    let day = seoulTime.getDay();
    let hour = seoulTime.getHours();
    let minute = seoulTime.getMinutes();
    let second = seoulTime.getSeconds();

    document.querySelector('#timer1').textContent = seoulTime.toString();


}, 1000)
