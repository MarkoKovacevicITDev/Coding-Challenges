
// Friday 13th counter
// if there is no end date, only calculate for starter year
function fridayTheThirteenths(start, end = start){
    const startDate = new Date(start,0,1);
    const endDate = new Date(end,11,31);

    let dayChecker = new Date(startDate);
    // fires while method until endDate is reached
    while(dayChecker < endDate){
        dayChecker.setDate(dayChecker.getDate() + 1);
        let weekdayNum = dayChecker.getDay();
        let dayOfMonth = dayChecker.getDate();

        if(weekdayNum === 5 && dayOfMonth === 13){ // checks if day is friday && checks if day is 13th of the Month
            console.log(`${dayChecker.getDate()}/${dayChecker.getMonth()}/${dayChecker.getFullYear()}`)
        }
    }
    // returns all dates where 13th of the month is a friday
}
fridayTheThirteenths(2024, 2026);