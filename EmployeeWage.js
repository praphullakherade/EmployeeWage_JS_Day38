
const isPartTime = 1;
const isFullTime = 2;
const partTimeHour = 4;
const fullTimeHours = 8;
const wagePerHour = 20;
const numOfWorkingDays = 20;
const maxHoursInMonth = 160;

let totalEmpHrs = 0;
let empHrs;
let totalEmpWage;
let totalWorkingDays = 0;

while (totalWorkingDays <= numOfWorkingDays &&
    totalEmpHrs < maxHoursInMonth) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck){
        case isFullTime:
            empHrs = 8;
            break;
        case isPartTime:
            empHrs = 4;
            break;
        default:
            empHrs = 0;        
    }
    totalEmpHrs = totalEmpHrs + empHrs;
    totalWorkingDays++;
}
totalEmpWage = wagePerHour * totalEmpHrs;
console.log("Total Days: " + totalWorkingDays + " Total Hours: " +totalEmpHrs + " Emp Wage: " + totalEmpWage); 


