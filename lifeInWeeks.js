
function lifeInWeeks(age) {
        
        var totalYears = 90;
        var remaingYears = totalYears - age;
        
        var totalDays = 365;
        var totalWeeks = 52;
        var totalMonths = 12;
        
        var remainingDays = (remaingYears * totalDays);
        var remainingWeeks = (remaingYears * totalWeeks);
        var remainingMonths = (remaingYears * totalMonths);
        
        console.log("You have "+remainingDays+" days, "+remainingWeeks+" weeks, and "+remainingMonths + " months left.");
    }
    
    lifeInWeeks(51);