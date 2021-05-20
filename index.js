const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(function(accumulator, element){ 
    return element + accumulator}, 0)

/*
const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 }
];


function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}

console.log(couponLocations.reduce(couponCounter, 0));*/