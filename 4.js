// Відвідувач (Visitor) — це патерн програмування, який дозволяє додавати нові операції до групи об'єктів, не змінюючи самі об'єкти.
// Відвідувач розділяє алгоритм від представлення об'єктів, що дозволяє додавати нові операції, не змінюючи класи цих об'єктів.

// Клас Letter представляє об'єкт листа з назвою і текстом.
class Letter {
  // Створіть конструктор, що приймає назву листа title та його текстовий вміст text та ініціалізує відповідні поля
  constructor (title, text) {
    // Записуємо аргумент title в властивість title, яка представляє назву листа в класі
    this.title = title
    // Записуємо аргумент text в властивість text, яка представляє  текстовий вміст листа в класі
    this.text = text
  }
}

// Клас Picture представляє об'єкт зображення з назвою та розміром
class Picture {
  // Створіть конструктор, що приймає назву зображення title та його розмір size та ініціалізує відповідні поля
  constructor(title, size) {
    // Записуємо аргумент title в властивість title, яка представляє назву зображення в класі
    this.title = title
    // Записуємо аргумент size в властивість size, яка представляє розмір зображення
    this.size = size
  }
}

// Клас Movie представляє об'єкт відеофільму з назвою та тривалістю
class Movie {
  // Конструктор приймає назву відеофільму title та його тривалість duration та ініціалізує відповідні поля
  constructor(title, duration) {
    // Записуємо аргумент title в властивість title, яка представляє назву відеофільму в класі
    this.title = title
    // Записуємо аргумент duration в властивість duration, яка представляє тривалість відеофільму
    this.duration = duration
  }
}

// Клас Portfolio представляє колекцію об'єктів, таких як листи, зображення та відеофільми
class Portfolio {
  // Створимо властивість elements, яка представляє список об'єктів в портфоліо, початкове значення пустий масив
  elements = []
  // Зрібть метод addElement, що приймає element та додає об'єкт до портфоліо
  addElement(element) {
    this.elements.push(element)
  }
  // Зробіть методи readLetter, що приймає letter та виводить в консоль: "Лист: ${letter.title}, Розмір: ${letter.text.length} символів"
  readLetter(letter) {
    console.log(`Лист: ${letter.title}, Розмір: ${letter.text.length} символів`)
  }
  // Зробіть методи readPicture, що приймає picture та виводить в консоль: "Картина: ${picture.title}, Розмір: ${picture.size} KB"
  readPicture(picture) {
    console.log(`Картина: ${picture.title}, Розмір: ${picture.size} KB`)
  }
  // Зробіть методи readMovie, що приймає movie та виводить в консоль: "Фільм: ${movie.title}, Тривалість: ${movie.duration} хвилин"
  readMovie(movie) {
    console.log(`Фільм: ${movie.title}, Тривалість: ${movie.duration} хвилин`)
  }
  // Зробіть метод readElements, який читає інформацію про всі об'єкти в портфоліо в залежності від того якого класу елемент викликає readLetter, readPicture, readMovie
  readElements() {
    // Робимо ітерацію for де є змінна element в яку приходять елементи this.elements
    for(const element of this.elements) {
      // Через instanceof по черзі через if та instanceof перевіряємо відношення element до кожного класу.
      if(element instanceof Letter) {
        // Якщо element є елементом певного класу, то викликати відповідний метод для читання об'єкту певного класу
        this.readLetter(element)
      } else if (element instanceof Picture) {
        this.readPicture(element)
      } else if (element instanceof Movie) {
        this.readMovie(element)
      }
    }
  }
}

console.log("Завдання 4 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо екземпляр класу Portfolio
const myPortfolio = new Portfolio();

// Створюємо різні об'єкти
const letter = new Letter("My Letter", "Hello, this is a letter.");
const picture = new Picture("My Picture", 2048);
const movie = new Movie("My Movie", 120);

// Додаємо об'єкти до портфоліо
myPortfolio.addElement(letter);
myPortfolio.addElement(picture);
myPortfolio.addElement(movie);

// Виводимо всі об'єкти в портфоліо
console.log(myPortfolio.elements);

// Читаємо інформацію про всі об'єкти в портфоліо
myPortfolio.readElements();
