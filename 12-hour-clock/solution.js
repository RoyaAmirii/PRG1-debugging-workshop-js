function convertTo12HourClock(time) {
  let [hours,minutes] = time.split(":");//we want to divijde hours by minutes using colon
  hours = parseInt(hours); // parseint converts string intp interger
  const period = hours >= 12? "PM" : "AM"; //if hour is greater or equal to 12 then use pm, if not then am
  hours = hours % 12 || 12; // if converting to 12 hour clock then divide by 12
    return `${hours}:${minutes} ${period}`; // when value is returned, you are returned the value of the word, not the word
  }


module.exports = { convertTo12HourClock };
console.log(convertTo12HourClock("12:05"))


