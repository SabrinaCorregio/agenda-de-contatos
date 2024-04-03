document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const tableBody = document.querySelector('#contacts tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (name === '' || phone === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${phone}</td>
        `;
        tableBody.appendChild(newRow);

        // Limpar os campos do formulário após adicionar o contato
        nameInput.value = '';
        phoneInput.value = '';
    });
});
