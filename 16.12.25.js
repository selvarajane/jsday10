const output = document.getElementById("output");

/* 1. Create an array of employees */
let employees = [
    { name: "Selva", age: 22, position: "Developer" },
    { name: "Arun", age: 28, position: "Designer" },
    { name: "Kumar", age: 25, position: "Tester" }
];

function showEmployees() {
    output.textContent = JSON.stringify(employees, null, 2);
}

/* 2. Fetch and display products from API */
function fetchProducts() {
    fetch("https://fakestoreapi.com/products?limit=5")
        .then(res => res.json())
        .then(data => {
            output.textContent = JSON.stringify(data, null, 2);
        });
}

/* 3. Sort by age */
function sortByAge() {
    const sorted = [...employees].sort((a, b) => a.age - b.age);
    output.textContent = JSON.stringify(sorted, null, 2);
}

/* 4. Filter students with grade A */
const students = [
    { name: "Ravi", grade: "A" },
    { name: "Priya", grade: "B" },
    { name: "Anu", grade: "A" }
];

function filterGradeA() {
    const result = students.filter(s => s.grade === "A");
    output.textContent = JSON.stringify(result, null, 2);
}

/* 5. Find product by name */
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 }
];

function findProduct() {
    const product = products.find(p => p.name === "Mobile");
    output.textContent = JSON.stringify(product, null, 2);
}

/* 6. Convert array of objects to names */
function getNames() {
    const names = employees.map(e => e.name);
    output.textContent = JSON.stringify(names, null, 2);
}

/* 7. Modify object in array */
function updateEmployee() {
    employees[0].position = "Senior Developer";
    output.textContent = JSON.stringify(employees, null, 2);
}

/* 8. Count condition */
function countAdults() {
    const count = employees.filter(e => e.age >= 25).length;
    output.textContent = `Employees age >= 25: ${count}`;
}

/* 9. Search dynamically */
function searchEmployee() {
    const value = document.getElementById("searchInput").value.toLowerCase();
    const result = employees.filter(e => e.name.toLowerCase().includes(value));
    output.textContent = JSON.stringify(result, null, 2);
}

/* 10. Group by position */
function groupByPosition() {
    const grouped = employees.reduce((acc, emp) => {
        acc[emp.position] = acc[emp.position] || [];
        acc[emp.position].push(emp);
        return acc;
    }, {});
    output.textContent = JSON.stringify(grouped, null, 2);
}

/* 11. Remove object by property */
function removeEmployee() {
    employees = employees.filter(e => e.name !== "Arun");
    output.textContent = JSON.stringify(employees, null, 2);
}

/* 12. Add object dynamically */
function addEmployee() {
    employees.push({ name: "Divya", age: 24, position: "HR" });
    output.textContent = JSON.stringify(employees, null, 2);
}

/* 13. Merge two arrays */
function mergeArrays() {
    const newEmployees = [
        { name: "Raj", age: 30, position: "Manager" }
    ];
    const merged = [...employees, ...newEmployees];
    output.textContent = JSON.stringify(merged, null, 2);
}

/* 14. Clone array */
function cloneArray() {
    const cloned = JSON.parse(JSON.stringify(employees));
    output.textContent = JSON.stringify(cloned, null, 2);
}

/* 15. Total stock calculation */
const inventory = [
    { item: "Pen", stock: 50 },
    { item: "Book", stock: 30 },
    { item: "Bag", stock: 10 }
];

function totalStock() {
    const total = inventory.reduce((sum, i) => sum + i.stock, 0);
    output.textContent = `Total Stock: ${total}`;
}
