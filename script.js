function submit(){
    var score = scoreOfuser.value
    var songfail = new Audio ("assests/audio_AUD-20200714-WA0013.m4ag")
    var songpass = new Audio ("assests/audio_AUD-20200621-WA0012 (1).m4a")
    var songaverage = new Audio ("assests/audio_AUD-20200616-WA0019.mp3")
    var  songcredit = new Audio ("assests/audio_AUD-20200617-WA0066.mp3")
    var songgood = new Audio ("assests/mixkit-church-light-applause-501.wav")
    var songexcellent =new Audio ("assests/audio_mixkit-ending-show-audience-clapping-478.wav")
    if (scoreOfuser.value == "") {
        show.innerHTML = "please enter your score"
    }
        else if (score >=0 && score <35){
        show.innerHTML = `F-fail your score is  <b class = "text-danger fs-3">${score}</b>😐🤐`
        songfail.play()   
       } 
        
       else if (score >=35 && score <45){
        show.innerHTML = `E-pass your score is  <b class = "text-warning fs-3">${score}</b>🥱🤨`
        songpass.play()   
       }
        
        else if (score >=45 && score <50){
        show.innerHTML = `D-credit your score is  <b class = "text-dark fs-3">${score}</b>🦦😑`
        songaverage.play() 
    }

        else if (score >=50 && score <60){
            show.innerHTML = `C-credit your score is  <b class = "text-info fs-3">${score}</b>👀😑`
            songcredit.play()
        }
         
        else if (score >=60 && score < 70) {
            show.innerHTML = `B-Good your score is <b class = "text-primary fs-3">${score}</b> 😁👍`
            songgood.play()
        }
    
        else if (score <= 100 && score >= 70 ) {
        show.innerHTML = `A-Excellent your score is <b class = "text-success fs-3">${score}</b> 😍👌`
        songexcellent.play()
        }
        scoreOfuser.value = ""
    }
