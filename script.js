function clearFields() {
  document.getElementById("monthlySalary").value = "";
  document.getElementById("hoursWorked").value = "";
  document.getElementById("weekendHours").value = "";
  document.getElementById("overtimePay").innerText = "";
}

function calculateOvertime() {
    var monthlySalary = parseFloat(
      document.getElementById("monthlySalary").value
    );
    var hoursWorked = parseFloat(
      document.getElementById("hoursWorked").value
    );
    var weekendHours = parseFloat(
      document.getElementById("weekendHours").value
    );

    if (isNaN(monthlySalary) || isNaN(hoursWorked) || isNaN(weekendHours)) {
      document.getElementById("overtimePay").innerText =
        "Please provide complete information";
    } else {
      var workingHoursPerMonth = 160; // Assuming 40 hours per week and 4 weeks per month
      var hourlyRate = monthlySalary / workingHoursPerMonth;
      var regularHours = 160;
      var weekdaysOvertimeRate = 1.5;
      var weekendsOvertimeRate = 2;

      var regularPay = 0;
      var overtimePay = 0;

      if (hoursWorked <= regularHours) {
        regularPay = hoursWorked * hourlyRate * weekdaysOvertimeRate;
      } else {
        regularPay = regularHours * hourlyRate * weekdaysOvertimeRate;
        var extraHours = hoursWorked - regularHours;
        overtimePay = extraHours * hourlyRate * weekdaysOvertimeRate;
      }

      overtimePay += weekendHours * hourlyRate * weekendsOvertimeRate;
      var totalPay = regularPay + overtimePay;
      document.getElementById("overtimePay").innerText =
        "Total to Pay: $" + totalPay.toFixed(2);
    }
  }
