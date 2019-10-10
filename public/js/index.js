const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = '';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = search.value.trim();
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = '';
    fetch(`/weather?address=${address}`).then((res) => {
        res.json().then((data) => {
            const weather = data.report
            if (!data.error) {
                messageOne.textContent = weather.location;
                messageTwo.textContent = weather.forecast;
            } else {
                messageOne.textContent = data.error;
                console.warn(data.error)
            }
        })
    }, err => {
        console.warn(err)
    })
})
