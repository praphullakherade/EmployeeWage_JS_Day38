
const isPartTime = 1;
const isFullTime = 2;
const partTimeHour = 4;
const fullTimeHours = 8;
const wagePerHour = 20;
const numOfWorkingDays = 20;

let empWorkingHours = 0;
let empWage = 0;
let totalEmpWage = 0;

for (let day = 0; day <= numOfWorkingDays; day++){
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck){
        case isPartTime:
            empWorkingHours = 4;
            break;
        case isFullTime:
            empWorkingHours = 8;
            break;
        default:
            empWorkingHours = 0;    
    }
    empWage = empWorkingHours * wagePerHour;
    totalEmpWage +=empWage;
    console.log("Employee Wage is : " + empWage);
}
console.log("Total Employee Wage is: " + totalEmpWage);


