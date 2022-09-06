const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  return BMI = weight / (height * height)
}
function getBMIMeaning(weight, height) {
  //code here
  let BMI = calculateBMI(weight, height)
  // - BMI < 18.5 จะแสดงข้อความ "Underweight"
  // - BMI อยู่ในช่วง 18.5 -24.9 จะแสดงข้อความ "Normal weight"
  // - BMI > 25.0 จะแสดงข้อความ "Overweight"
  if(BMI < 18.5) 
    return "Underweight"
  else if(BMI >= 18.5 && BMI <= 24.9)
  return "Normal weight"
  else if (BMI > 25.0)
  return "Overweight"
}

getBMIMeaning(65, 1.8)
getBMIMeaning(80, 1.7)
getBMIMeaning(44, 1.6)
module.exports = getBMIMeaning
