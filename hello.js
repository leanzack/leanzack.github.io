
        document.querySelector('form').addEventListener('submit', function () {
            let name = document.querySelector('#name').value;
            alert('hello,' + name);
            event.preventDefault();
        });

    let body = document.querySelector('body');
    document.querySelector('#red').addEventListener('Click', function() {
        body.style.backgroundColor = 'red';
        });
    document.querySelector('#green').addEventListener('Click', function () {
            body.style.backgroundColor = 'green';
        });
    document.querySelector('#blue').addEventListener('Click', function () {
            body.style.backgroundColor = 'blue';
        });