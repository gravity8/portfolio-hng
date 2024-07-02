// To toggle
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//To set a nav link active
function setNavLinkActive(elementToSetActive){
    const allLinks = document.querySelectorAll(".navlinks>li");
    allLinks.forEach(el=>{
        if (el !== elementToSetActive) el.classList.remove("active")
    })
    elementToSetActive.classList.add("active")
}

//to toggle menu for the mobile screen
function toggleMenu(){
    const menu = document.querySelector(".navlinks-container");
    if(menu.classList.contains("active")){
        menu.classList.remove("active")
    }
    else{
        menu.classList.add("active")
    }
    
}

function updateTimeAndDay() {
    const now = new Date();
    const isoString = now.toISOString();
    const utcTime = isoString.slice(11, 19);
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });
  
    document.getElementById("currentTimeUTC").textContent = utcTime;
    document.getElementById("currentDay").textContent = dayOfWeek;
  }
  
  updateTimeAndDay();
  setInterval(updateTimeAndDay, 60000);