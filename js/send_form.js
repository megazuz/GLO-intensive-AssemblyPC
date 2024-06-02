const sendForm = () => {
    const form = document.querySelector('.modal');
    console.log(form);
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const text = form.querySelector('input[type = text]');
        const tel = form.querySelector('input[type = tel]');
        const email = form.querySelector('input[type = email]');

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                if (!response.ok) {
                    alert('Code 404. POST method failed. Server not found!');
                    throw new Error('Code 404. POST method failed. Server not found!');
                } else {
                    console.log('POST method ended successfully');
                };
                return response.json()
            })
            .then((json) => console.log(json))
            .finally(() => {
                form.reset();
                console.log('Форма очищена');
            });
    });
};

sendForm();