
const Countdown = () => {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  let countDown = new Date('April 1, 2022 00:00:01').getTime()
  let x = setInterval(function() {
    let now = new Date().getTime()
    let distance = countDown - now
    document.getElementById('days').innerHTML = Math.floor(distance / (day))
    document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour))
    document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute))
    document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second)
    //do something later when date is reached
    //if (distance < 0) {
    // clearInterval(x) // 'IT'S MY BIRTHDAY!
    //}
  }, second)
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <div className="countdown-wrapper">
          <ul>
            <li><span id="days"></span>Days</li>
            <li><span id="hours"></span>Hours</li>
            <li><span id="minutes"></span>Minutes</li>
            <li><span id="seconds"></span>Seconds</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Countdown