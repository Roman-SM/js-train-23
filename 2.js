// Муха (Flyweight) — це патерн програмування, основна ідея якого полягає в тому, щоб спільно використовувати об'єкт-одиночка
// замість створення окремих унікальних об'єктів для кожного випадку використання

// Клас Group. Він використовує шаблон "Одиночка" та відповідає за створення груп товарів.
class Group {
    // Створюємо приватне статичне поле #groups використовується для зберігання усіх створених груп. Має початкове значени: пустий об'єкт
    static #groups = {}
    // Об'єкт використовується для зберігання груп, де ключ - це назва групи, а значення - екземпляр групи.
    // Створюмєо конструктор класу, який приймає назву групи як аргумент та ініціалізує поле this.name.
    constructor (name) {
        this.name = name
    }
    // Створюємо статичний метод create, який приймає назву групи name як аргумент.
    static create(name) {
        // Метод завжди повертає екземпляр групи з вказаною назвою.
        // Перевірка чи група з такою назвою ще не була створена
        if (!this.#groups[name]) {
            // то вона створюється та зберігається в полі #groups.
            this.#groups[name] = new Group(name)
        }
        // в кінці повертає #groups[name]
        return this.#groups[name]
    }
}
// Клас Product відповідає за створення продуктів.
class Product {
// Створюємо конструктор класу, який приймає назву продукту name та групу group як аргументи та ініціалізує відповідні поля.
    constructor (name, group) {
        this.name = name
        this.group = group
    }
    // Робимо метод display, який виводить інформацію про продукт в консоль Продукт: ${this.name}, Група: ${this.group.name}.
    display() {
        console.log(`Продукт: ${this.name}, Група: ${this.group.name}`)
    }
}

console.log("Завдання 2 ====================================");
// Після виконання розкоментуйте код нижче

// Створення груп за допомогою методу Group.create. Цей метод гарантує, що кожна група з унікальною назвою буде створена лише один раз.
const electronics = Group.create("Електроніка");
const books = Group.create("Книги");
const electronics2 = Group.create("Електроніка");

// Виведення груп в консоль. Ми бачимо, що electronics та electronics2 - це один і той же об'єкт.
console.log(electronics, books, electronics2);
console.log(electronics === electronics2); // true

// Створення продуктів. Кожен продукт належить до певної групи.
const product1 = new Product("Ноутбук", electronics);
const product2 = new Product("Навушники", electronics);
const product3 = new Product("Воно", books);
const product4 = new Product("Смартфон", Group.create("Електроніка")); // тут створюється нова група або використовується вже створена

// Виведення продуктів в консоль.
product1.display();
product2.display();
product3.display();
product4.display();

// Перевірка, чи належать два продукти до однієї групи.
console.log(product1.group === product4.group); // true

// Фільтрація продуктів за групою. В даному випадку виводяться тільки продукти групи "Електроніка".
const list = [product1, product2, product3, product4].filter(
  (product) => product.group === Group.create("Електроніка")
);

// Виводиться список продуктів, що належать до групи "Електроніка"
console.log(list); 
