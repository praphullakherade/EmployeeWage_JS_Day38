
const isPartTime = 1;
const isFullTime = 2;
const partTimeHour = 4;
const fullTimeHours = 8;
const wagePerHour = 20;

let empWorkingHours = 0;
let empWage = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case isFullTime:
            return fullTimeHours;
        case isPartTime:
            return partTimeHour;
        default:
            return 0;
    }
}
empWorkingHours = getWorkingHours(empCheck);n
empWage = empWorkingHours * wagePerHour;
console.log("Employee Wage is : " + empWage);

