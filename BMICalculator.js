//BMI Calculator

alert("This program is for learning purposes and is not meant as any form of medical advice")

var HeightInches      = "60";
var WeightPounds      = "140";
var HeightCentimeters = 150;
var WeightKilos       = 228;   
var BMI               = 16;
var WellnessLevel     = "Healthy"//Underweight, Healthy, Overweight, Obese

HeightInches = prompt("Enter height in inches");

HeightInches = Number(HeightInches);

WeightPounds = prompt("Enter weight in pounds");

WeightPounds = Number(WeightPounds);

HeightCentimeters = HeightInches * 2.54;
WeightKilos       = WeightPounds / 2.2046;

BMI                = WeightKilos/((HeightCentimeters/100) * (HeightCentimeters/100));

if(BMI < 18)
{
    WellnessLevel = "Underweight";
}
else if(BMI >= 18 && BMI <= 24)
{
    WellnessLevel = "Healthy";
}
else if(BMI > 24 && BMI <= 39)
{
    WellnessLevel = "Overweight";
}
else
{
    WellnessLevel = "Obese";
}

HeightInches = String(HeightInches);
HeightCentimeters = String(HeightCentimeters);
WeightPounds = String(WeightPounds);
WeightKilos = String(WeightKilos);
BMI = String(BMI);


console.log(`The BMI of a person with a height of ${HeightInches} in (${HeightCentimeters} cm) and a weight of ${WeightPounds} lbs
            (${WeightKilos} kg) is ${BMI}. This is considered ${WellnessLevel}. A BMI between 18 and 24 (inclusive) is considered
            "healthy"`);