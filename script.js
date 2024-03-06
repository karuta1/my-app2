function findDay() {
    var inputDate = document.getElementById('dateInput').value;
    var date = new Date(inputDate);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = days[date.getDay()];
    document.getElementById('result').style.display = "";
    document.getElementById('result').innerHTML = 'The day of the week for ' + inputDate + ' is ' + dayOfWeek;
  }