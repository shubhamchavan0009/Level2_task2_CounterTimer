window.onload = function() {
    // Set the date and time for the countdown
    var countdownDate = new Date("2023-06-30 00:00:00").getTime();
  
    // Update the countdown every second
    var countdown = setInterval(function() {
      var now = new Date().getTime();
      var distance = countdownDate - now;
  
      // Calculate the remaining days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown in the elements with respective ids
      document.getElementById("days").innerHTML = days + "days";
      document.getElementById("hours").innerHTML = hours + "hours";
      document.getElementById("minutes").innerHTML = minutes + "minutes";
      document.getElementById("seconds").innerHTML = seconds + "seconds";
  
      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Countdown expired";
      }
    }, 1000);
  };
  