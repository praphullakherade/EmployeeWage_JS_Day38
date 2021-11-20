
const isPartTime = 1;
const isFullTime = 2;
const partTimeHour = 4;
const fullTimeHours = 8;
const wagePerHour = 20;

let empWorkingHours = 0;
let empWage = 0;
let empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck){
    case isFullTime:
        empWorkingHours = fullTimeHours;
        break;
    case isPartTime:
        empWorkingHours = partTimeHour;
        break;
    default:
        empWorkingHours = 0;    
}

empWage = empWorkingHours * wagePerHour;
console.log("Employee Wage is : " +empWage);

