


var ad=prompt("Adınızı Giriniz:");
console.log(ad);

document.getElementById("yourName").innerHTML =ad.toUpperCase();



function showTime() {
    var date = new Date().toLocaleString();
    document.getElementById("clockNow").innerHTML = date;
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(showTime, 100); 


// const todayDate=new Date();
// document.querySelector("#myDay").innerHTML = todayDate.getDate();
