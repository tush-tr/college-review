const nosonDB = require("@tush-tr/nosondb");
const reviewsDb = new nosonDB("reviews.json");
async function getData() {
  let data = await reviewsDb.create({
    College: " Delhi Technological University - [DTU], New Delhi",
    Reviews:
      "Placement -Students are eligible to sit for placement in 4th year. Many good companies come here to recruit. To name a few Adobe, Airtel, TCS, Qualcomm etc. Come here almost every year. Highest package is 1 crore for abroad and around 50 Lakh for India. Scholarship -Fee hike 10% every year and its same for all students of BTech in that particular academic year. Scholarships are available but hard to get. Inhouse scholarship is rarely offered but scholarship from state government is easier to obtain. Campus Life -Engifest is one of the best fest across Delhi. DTU has large area for such fests. There is footfall of aprox 2 lakh on Engifest. Techfest is namesake hardly anyone outside College come. Yuvaan also has decent football. ",
  });
}

getData();
