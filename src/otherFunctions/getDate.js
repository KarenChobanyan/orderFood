function setMonth(month) {
    switch (month) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "september";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December"

        default:
            break;
    }
};

function setDateNumbers(number){
    if(number<10){
        return number.padStart(2,0)
    }else{
        return number
    }
}


const getDate = () => {
    const date = new Date().getDate().toString()
    const year = new Date().getFullYear()
    const month = setMonth(new Date().getMonth())
    const hour = new Date().getHours().toString()
    const minute = new Date().getMinutes().toString()
    const time = `${setDateNumbers(date)}.${month}.${year}   ${setDateNumbers(hour)}:${setDateNumbers(minute)}`
    return time
}

export {getDate}