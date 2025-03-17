function yesClick() {
    // var trackingUrl = "https://intedure-virsoles.com/37fd44d5-7204-4476-8a87-01f0bd591a27?display={display}&source={source}&lastname={lastname}&email={email}&gender={gender}&phone={phone}&dob={dob}&creative={creative}&Text={text}&clickId={clickId}";
    // // Redirect the user to the tracking URL
    // window.location.href = trackingUrl;
    var box = document.getElementsByClassName("box-2");
    const box1 = document.getElementsByClassName("box-1");
    box[0].classList.remove("d-none");
    box1[0].classList.add("d-none");
    var trackingUrl = "https://intedure-virsoles.com/01dfeeab-b3fb-4bad-ba5a-4ed67f7f5f05?display={display}&source={source}&lastname={lastname}&email={email}&gender={gender}&phone={phone}&dob={dob}&creative={creative}&Text={text}&clickId={clickId}";
    fetch(trackingUrl, { method: 'GET' });
}

function noClick() {
    // var trackingUrl = "https://intedure-virsoles.com/01dfeeab-b3fb-4bad-ba5a-4ed67f7f5f05?display={display}&source={source}&lastname={lastname}&email={email}&gender={gender}&phone={phone}&dob={dob}&creative={creative}&Text={text}&clickId={clickId}";
    // // Redirect the user to the tracking URL
    // window.location.href = trackingUrl;
    const box = document.getElementsByClassName("box-4");
    const box1 = document.getElementsByClassName("box-1");
    var box2 = document.getElementsByClassName("box-2");

    box2[0].classList.add("d-none");
    box[0].classList.remove("d-none");
    box1[0].classList.add("d-none");
    setTimeout(() => {
        startFinalProcess();
    }, 2000);
}
var totalTime = 155;
var isAddedScript = false;

function startFinalProcess() {
    const timer = document.getElementsByClassName("timer");
    timer[0].classList.remove("d-none");
    const box = document.getElementsByClassName("box-3");
    const box1 = document.getElementsByClassName("box-4");
    box[0].classList.remove("d-none");
    box1[0].classList.add("d-none");
    const interval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(interval);
            const box = document.getElementsByClassName("end-time-text");
            const box1 = document.getElementsByClassName("starting-time-text");
            box[0].classList.remove("d-none");
            box1[0].classList.add("d-none");
        }
        let minutes = Math.floor(totalTime / 60);
        let extraSeconds = totalTime % 60;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
        const ele = document.getElementById("timing-sec");
        ele.innerText = minutes + ":" + extraSeconds;
        totalTime--;
    }, 1000);
}