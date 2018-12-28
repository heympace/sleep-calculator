/* 
-----------------------------------------------------------
Sleep Debt Calculator
-----------------------------------------------------------
In this project we'll calculate if you're getting enough 
sleep each week using a sleep debt calculator. The program 
will determine the actual and ideal hours of sleep for 
each night of the last week. Finally, it will calculate, 
in hours, how far you are from your weekly sleep goal.
-----------------------------------------------------------
*/

const getSleepHours = (day) => {
    //day = day.toLowerCase();
    let hours = 0
    switch (day) {
        case 'Monday':
            return 8
            break;
        case 'Tuesday':
            return 7
            break;
        case 'Wednesday':
            return 6
            break;
        case 'Thursday':
            return 7
            break;
        case 'Friday':
            return 5
            break;
        case 'Saturday':
            return 9
            break;
        case 'Sunday':
            return 9
            break;
    }
  }
  
  // Get total sleep hours for the week
  const getActualSleepHours = () => {
    let totalHours = 
        parseInt(
        getSleepHours('Monday') +
        getSleepHours('Tuesday') +
        getSleepHours('Wednesday') +
        getSleepHours('Thursday') +
        getSleepHours('Friday') +
        getSleepHours('Saturday') +
        getSleepHours('Sunday')
        )
    return totalHours
  }
  
  // get Ideal Sleep Hours
  const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7
  }
  
  const calculateSleepDebt = () => {
      // assign hours to variables
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    // sleep hours equal
      if (actualSleepHours === idealSleepHours) {
      return "You got the perfect amount of sleep!"
    }// sleep hour surplus
    else	if (actualSleepHours > idealSleepHours) {
      return "You got more sleep than needed!" + "You had " + (actualSleepHours - idealSleepHours) + " extra hours of sleep."
    }// sleep hour deficit
    else	if (actualSleepHours < idealSleepHours) {
      return "You should get some rest." + " You need " + (idealSleepHours - actualSleepHours) + " hours of sleep."
    }
  }
  
  // Print result
  console.log(calculateSleepDebt())