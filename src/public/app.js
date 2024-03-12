const editButtons = document.querySelectorAll('.edit-button');
const deleteButtons = document.querySelectorAll('.delete-button');

editButtons.forEach(button => {
    button.addEventListener('click', () => {
        const groupItem = button.closest('.task-item');
        const paragraphName = groupItem.querySelector('.task-details p');
        const inputName = groupItem.querySelector('.task-details input');
        const saveButton = groupItem.querySelector('.save-button');

        paragraphName.style.display = 'none';
        inputName.style.display = 'inline-block';
        button.style.display = 'none';
        saveButton.style.display = 'inline-block';

        saveButton.addEventListener('click', () => {
            paragraphName.textContent = inputName.value;
            inputName.style.display = 'none';
            paragraphName.style.display = 'inline-block';
            button.style.display = 'inline-block';
            saveButton.style.display = 'none';

            const id = groupItem.getAttribute('task-id');
            const task = inputName.value;

            fetch(`/api/task/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ task })
            });
        });
    });
});

deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const groupItem = button.closest('.task-item');
        const id = groupItem.getAttribute('task-id');

        fetch(`/api/task/${id}`, {
            method: 'DELETE'
        });

        groupItem.remove();
    });
});
