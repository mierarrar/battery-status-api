navigator.getBattery().then(function (battery) {
  level();
  powerSource();
  ischarging();
  fullyCharged();
  remainingTime();
  indicatorLevel();

  
  function level() {
    var level = Math.round(battery.level * 100) + "%";
    document.getElementById("level").innerHTML = level;
  }

  function powerSource() {
    var powerSource = battery.charging ? ": Adapter" : ": Battery";
    document.getElementById("powerSource").innerHTML = powerSource;
  }

  function ischarging() {
    var status = battery.charging ? "In Progress" : "Not In Progress";
    document.getElementById("charge").innerHTML = ": " + status;
  }

  function fullyCharged() {
    if (battery.chargingTime !== Infinity) {
      fully = toTime(battery.chargingTime);
    } else {
      fully = "---";
    }
    document.getElementById("fullyCharged").innerHTML = ": " + fully;
  }

  function remainingTime() {
    remainingTime = Math.round((battery.dischargingTime/3600)*100)/100;
    document.getElementById("remainingTime").innerHTML = ": " + remainingTime +" Hrs";
  }

  function indicatorLevel(){
    var level = Math.round(battery.level * 100) + "%";
    document.getElementById("batteryCol").style.width = level;
  }
});


function toggle_light_mode() {
  var app = document.getElementsByTagName("body")[0];
  if (localStorage.lightMode == "dark") {
      localStorage.lightMode = "light";
      app.setAttribute("light-mode", "light");
  } else {
      localStorage.lightMode = "dark";
      app.setAttribute("light-mode", "dark");
  }       
}
