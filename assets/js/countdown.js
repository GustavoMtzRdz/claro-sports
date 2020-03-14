
const getRemaindTime = deadline => {
	let now = new Date().getTime(),
		remaindTime = (new Date(deadline).getTime() - now + 1000) / 1000,
		remaindSeconds = ('0' + Math.floor(remaindTime % 60)).slice(-2),
		remaindMinutes = ('0' + Math.floor(remaindTime / 60 % 60)).slice(-2),
		remaindHours = ('0' + Math.floor(remaindTime / 3600 % 24)).slice(-2),
		remaindDays = Math.floor(remaindTime / (3600 * 24));

		return {
			remaindTime,
			remaindSeconds,
			remaindMinutes,
			remaindHours,
			remaindDays
		}
};

console.log(getRemaindTime('Jul 24 2020 00:00:00 GMT-0600'));

const countdown = (deadline, cuenta, message) => {
  const el = document.getElementById(cuenta);
  const timerUpdate = setInterval( () => {
    let t = getRemaindTime(deadline);
    /* el.innerHTML = `${t.remaindDays}d:${t.remaindHours}h:${t.remaindMinutes}m:${t.remaindSeconds}s`; */
    el.innerHTML = `
      <div>
        ${t.remaindDays}<small>dias</small>
      </div>
      <div>
        ${t.remaindHours}<small>hrs.</small>
      </div>
      <div>
        ${t.remaindMinutes}<small>min.</small>
      </div>
      <div>
        ${t.remaindSeconds}<small>seg.</small>
      </div>
    `;
    if(t.remaindTime <= 1){
      clearInterval(timerUpdate);
      el.innerHTML = message;
    }
  }, 1000)
};

countdown('Jul 24 2020 00:00:00 GMT-0600', 'cuenta', 'Los Juegos Olimpicos han iniciado :)');
