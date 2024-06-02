const timer = () => {
    const daysBlock = document.querySelector('.timer__days');
    const hoursBlock = document.querySelector('.timer__hours');
    const minutesBlock = document.querySelector('.timer__minutes');
    const secondsBlock = document.querySelector('.timer__seconds');

    const dateDeadLine = '23 june 2024';
    const colorClass = 'red';
    const divider = 24 * 60 * 60 * 1000;
    let refresh = 999;
    let interval;

    const numWord = (value, words) => {
        const ost100 = value % 100;
        if (ost100 >= 5 && (ost100 <= 20)) return words[2];
        const ost10 = ost100 % 10;
        if (ost10 == 1) return words[0];
        if (ost10 > 1 && ost10 < 5) return words[1];
        return words[2];
    };

    const updateTimer = () => {
        const date = new Date().getTime();
        const ddl = new Date(dateDeadLine).getTime();
        const timeRemaining = new Date(ddl - date);

        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / divider);
            const hours = timeRemaining.getHours();
            const minutes = timeRemaining.getMinutes();
            const seconds = timeRemaining.getSeconds();
            const fDays = days < 10 ? '0' + days : days;
            const fHours = hours < 10 ? '0' + hours : hours;
            const fMinutes = minutes < 10 ? '0' + minutes : minutes;
            const fSeconds = seconds < 10 ? '0' + seconds : seconds;
            daysBlock.textContent = fDays;
            hoursBlock.textContent = fHours;
            minutesBlock.textContent = fMinutes;
            secondsBlock.textContent = fSeconds;
            daysBlock.nextElementSibling.textContent = numWord(days, ['день', 'дня', 'дней']);
            hoursBlock.nextElementSibling.textContent = numWord(hours, ['час', 'часа', 'часов']);
            minutesBlock.nextElementSibling.textContent = numWord(minutes, ['минута', 'минуты', 'минут']);
            secondsBlock.nextElementSibling.textContent = numWord(seconds, ['секунда', 'секунды', 'секунд']);
        } else {
            daysBlock.textContent = '00';
            hoursBlock.textContent = '00';
            minutesBlock.textContent = '00';
            secondsBlock.textContent = '00';
            daysBlock.classList.add(colorClass);
            hoursBlock.classList.add(colorClass);
            minutesBlock.classList.add(colorClass);
            secondsBlock.classList.add(colorClass);
            clearInterval(interval);
        }
    };

    updateTimer();
    interval = setInterval(updateTimer, refresh);
};

timer();