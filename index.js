// Your code here
const createEmployeeRecord = function (employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  };

  //function to create emloyees record
  const createEmployeeRecords = function (employeesData) {
    return employeesData.map(createEmployeeRecord);
  };

  const createTimeInEvent = function (dateTime) {
    const [date, hour] = dateTime.split(" ");

    this.timeInEvents.push({
      type: "TimeIn",
      date,
      hour: parseInt(hour, 10),
    });

    return this;
  };

  // writing a function to create a time out event
  const createTimeOutEvent = function (dateTime) {
    const [date, hour] = dateTime(" ");

    this.timeOutEvents.push({
      type: "TimeOut",
      date,
      hour: parseInt(hour, 10),
    });
    return this;
};

//writing function to show hours worked
const hoursWorkedOnDate = function (date) {
  const timeInEvent = this.timeInEvents.find((event) => event.date === date);
  const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);

  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;

  return hoursWorked;
};
 //function to calculate wages earned
const wagesEarnedOnDate = function (date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  const payRate = this.payPerHour;
  const wagesEarned = hoursWorked * payRate;

  return wagesEarned;
};

//writing function to find employees first names
const findEmployeeByFirstName = function (firstName) {
  return this.find((employee) => employee.firstName === firstName);
};

//writing function to calculate
const calculatePayroll = function (employeeRecords) {
    const totalPayroll = employeeRecords.reduce(function (total, employee) {
      return total + allWagesFor.call(employee);
    }, 0);

    return totalPayroll;
  };


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 
    return payable
}
