// Композит (Composite) — це патерн програмування, який дозволяє створювати структуру об'єктів у вигляді дерева, де кожен об'єкт може бути окремим елементом або групою об'єктів.
// Ця структура називається "деревоподібною" через ієрархію "один-багато".

// Клас ContentContainer використовується для управління списком вкладених елементів контенту
class ContentContainer {
  // Створюємо властивість elements для зберігання вкладених елементів контенту. Початкове значення - порожній масив.
  elements = []
  // Створюємо addElement, який отримує element як параметр та додає його в масив elements.
  addElement(element) {
    this.elements.push(element)
  }
  // Створюємо removeElement, який отримує element як параметр, знаходить його індекс у масиві та видаляє, якщо елемент знайдено.
  removeElement(element) {
    const index = this.elements.indexOf(element)
    if (index !== -1) { 
      this.elements.splice(index, 1)
    }
  }
}

// Клас Message, що є розширенням класу ContentContainer. Використовується для створення повідомлень з текстом.
class Message extends ContentContainer {
  // Створюємо конструктор класу, який приймає content як параметр та ініціалізує його
  constructor(content) {
    super()
    this.content = content
  }
  // Створюємо метод display, який виводить ${this.content} для всіх елементів масиву
  display() {
    console.log(`${this.content}`)
    this.elements.forEach((element) => element.display())
  }
}

// Клас Article, що є розширенням класу ContentContainer. Використовується для створення статті з вкладеними елементами.
class Article extends ContentContainer {
  // Створюємо конструктор класу, який приймає title назву статті як параметр та ініціалізує об'єкт з нею
  constructor (title) {
    super()
    this.title = title
  }
  // Створюємо метод display, який виводить Стаття: ${this.title} для всіх елементів масиву
  display() {
    console.log(`Стаття: ${this.title}`)
    this.elements.forEach((element) => element.display())
  }
}

console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо об'єкт Article з назвою "Навчальна стаття"
const article = new Article("Навчальна стаття");

// Додаємо повідомлення до статті
article.addElement(new Message("Дуже корисна стаття"));
article.addElement(new Message("Дякую за чудовий матеріал!"));

// Додаємо вкладене повідомлення до першого повідомлення в статті
article.elements[0].addElement(new Message("Відповідь: Згоден!"));

// Виводимо інформацію про статтю та всі її вкладені елементи
article.display();

// Виводимо масив вкладених елементів статті
console.log(article.elements);
