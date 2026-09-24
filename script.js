function createGrid(num) {
    const container = document.querySelector(".container");

    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < num; j++) {
            const column = document.createElement("div");
            column.classList.add("column");

            column.addEventListener("mouseenter", () => {
                column.style.backgroundColor = "black";
            });

            row.appendChild(column);
        }

        container.appendChild(row);
    }
}

const container = document.querySelector(".container");
const trigger = document.querySelector(".btn");

trigger.addEventListener("click", () => {
    const input = prompt("Select the size of Grid", "64");

    if (input === null) {
        return;
    }

    const size = Number(input);

    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    container.innerHTML = "";
    createGrid(size);
});