function gradeSystem() {
     var userScore = Number(scoreOfuser.value)
     console.log(userScore);

     
if (userScore >= 0 && userScore < 40) {
    console.log("F-Fail");
    Jordan.innerHTML = 'F-Fail'
}
}