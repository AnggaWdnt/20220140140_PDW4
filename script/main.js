const waktu = document.getElementById("waktu");

function dateTime(){
    const date = new Date();
    waktu.innerHTML = date;
}
Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });

setInterval(dateTime, 1000);

dateTime();