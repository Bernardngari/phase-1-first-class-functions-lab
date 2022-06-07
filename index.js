// Code your solution in this file!
function returnFirstTwoDrivers(param){
  return param.slice( 0, 2 );
}

function returnLastTwoDrivers ( param ){
  return param.slice( -2 );
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier  = (fare)  =>{
  return function fareMultiplier (){
    return fare ** 2;
  }
}
const fareDoubler = (fare) =>{
  return fare * 2;
}

const fareTripler = (fare)  =>{
  return fare * 3;
}

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers(arrayOfDrivers);
}
