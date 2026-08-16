const links = document.querySelectorAll('.tab-link');
        const frame = document.getElementById('pageFrame');

        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const page = this.getAttribute('href');
                frame.src = page;

                links.forEach(item => item.classList.toggle('active', item === this));
            });
        });