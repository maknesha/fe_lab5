const table = document.getElementById('table');
    const colorPicker = document.getElementById('colorPicker');

    // Створення таблиці 6x6
    let tableContent = '';
    let counter = 1;
    for (let i = 0; i < 6; i++) {
        tableContent += '<tr>';
        for (let j = 0; j < 6; j++) {
            tableContent += `<td id="cell-${counter}">${counter}</td>`;
            counter++;
        }
        tableContent += '</tr>';
    }
    table.innerHTML = tableContent;

    // Зміна кольору на випадковий при наведенні
    table.addEventListener('mouseover', function(event) {
        if (event.target.tagName === 'TD') {
            const randomColor = getRandomColor();
            event.target.style.backgroundColor = randomColor;
        }
    });

    // Зміна кольору на обраний при кліку
    table.addEventListener('click', function(event) {
        if (event.target.tagName === 'TD') {
            const selectedColor = colorPicker.value;
            event.target.style.backgroundColor = selectedColor;
        }
    });

    // Зміна кольору рядка через одну при подвійному кліку
    table.addEventListener('dblclick', function(event) {
        if (event.target.tagName === 'TD') {
            const cellId = parseInt(event.target.id.split('-')[1]); // Отримуємо номер клітинки
            const rowIndex = Math.floor((cellId - 1) / 6); // Визначаємо рядок клітинки
            const startIndex = rowIndex * 6; // Початковий індекс першої клітинки в рядку

            // Визначаємо, чи клікнули на парну чи непарну клітинку
            const startCell = cellId - startIndex; // Визначаємо індекс клітинки в рядку

            // Зафарбовуємо клітинки через одну, починаючи з клікнутого елемента
            for (let i = startCell - 1; i < 6; i += 2) {
                const cell = document.getElementById(`cell-${startIndex + i + 1}`);
                cell.style.backgroundColor = colorPicker.value;
            }
        }
    });

    // Функція для генерації випадкового кольору
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }