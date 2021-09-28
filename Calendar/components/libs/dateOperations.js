export const getNoOfDaysInMonth = (date) => {
    const fullYear = date.getFullYear();
    const month = date.getMonth();

    const currentMonthLastDate = new Date(fullYear, month+1, 0);
    const numberOfDays = currentMonthLastDate.getDate();
    return numberOfDays;
  }

  export const noOfDaysToBeLeftEmptyInTheBeginning = (date) => {
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
      const weekDay = firstDay.getDay();
      const noOfDaysToBeLeftEmpty = weekDay === 0 ? 6 : (weekDay - 1);
      return noOfDaysToBeLeftEmpty;
  }

  export const noOfDaysToBeInsertedFromNextMonth = (noIfDaysInCurrentMonth, noOfDaysToBeLeftEmptyInTheBeginning )=> {
    // console.log(noIfDaysInCurrentMonth, noOfDaysToBeLeftEmptyInTheBeginning);
    return 35 - (noIfDaysInCurrentMonth + noOfDaysToBeLeftEmptyInTheBeginning);
  }


  export const getMonthDatesArray = (date) => {
    const datesArray = [];
    const daysToBeLeftEmptyInTheBeginning = noOfDaysToBeLeftEmptyInTheBeginning(date); 
    const daysInMonth = getNoOfDaysInMonth(date);
    const daysToBeInsertedFromNextMonth = noOfDaysToBeInsertedFromNextMonth(daysInMonth, daysToBeLeftEmptyInTheBeginning);


    const fullYear = date.getFullYear();
    const month = date.getMonth()

    const lastDateInPrevMonth = new Date(fullYear, month, 0).getDate();
    const prevMonthDateToStartWith = lastDateInPrevMonth - daysToBeLeftEmptyInTheBeginning + 1;

    // console.log(prevMonthDateToStartWith, '=====');
    for(let i = 0; i< daysToBeLeftEmptyInTheBeginning; i+=1) {
      const d = new Date(fullYear, (month -1), prevMonthDateToStartWith + i, 5,30);
      console.log(prevMonthDateToStartWith + i,'==-', d);
      // console.log(d);
      const todayDate = {
        dateObject: d,
        monthDate: prevMonthDateToStartWith + i,
        whichMonth: 'prev'
      }
      datesArray.push(todayDate);
    }

    for(let i = 0; i< daysInMonth; i+=1) {
       const date = new Date(fullYear, month, i+1, 5, 30);
      const todayDate = {
        dateObject: date,
        monthDate: i+1,
        whichMonth: 'current'
      }
      datesArray.push(todayDate);
    }

    for(let i = 0; i< daysToBeInsertedFromNextMonth; i+=1) {
      const date = new Date(fullYear, month + 1, i+1, 5, 30);
      const todayDate = {
        dateObject: date,
        monthDate: i+1,
        whichMonth: 'next'
      }
      datesArray.push(todayDate);
    }

    console.log(datesArray)


    return datesArray;



  }
