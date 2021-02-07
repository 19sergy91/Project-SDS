document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('#form');
    const btn = document.querySelector('.btn');
    const statusContainer = document.querySelector('.status');

    const loginForm = document.querySelector('#login-form');
    const loginButton = document.querySelector('#login-btn');

    if (form) {
        btn.addEventListener('click', function(e) {
        e.preventDefault();
        let data = {};
        const elements = [...form.elements];
        for (let el of elements) {
            if (el.type !== 'submit') {
                data[el.name] = el.value;
            }
        }
        console.log(data);
        console.log(JSON.stringify(data));
        
        fetch('/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            statusContainer.innerHTML = '';
            return Promise.all([response.ok, response.json()]);
          })
          .then((data) => {
            console.log(data);
            if (!data[0]) {
                throw Error(data[1].error);
            }
            statusContainer.insertAdjacentHTML('beforeend', '<p class="alert alert-success">Inserted</p>');
            setTimeout(() => {
                statusContainer.innerHTML = '';
            }, 3000);
          }).catch((error) => {
            console.log(error);
            statusContainer.insertAdjacentHTML('beforeend', `<p class="alert alert-danger">${error}</p>`);
            setTimeout(() => {
                statusContainer.innerHTML = '';
            }, 3000);

          })
    });
    }
    loginButton.addEventListener('click', function (e) {
        e.preventDefault();

        let data = {};
        const elements = [...loginForm.elements];
        for (let el of elements) {
            if (el.type !== 'submit') {
                data[el.name] = el.value;
            }
        }
        
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        // .then((res) => console.log(res));
    })

});