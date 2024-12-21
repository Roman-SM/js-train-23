// Шаблонний метод (Template Method) — це патерн програмування, який визначає загальну структуру алгоритму, залишаючи певні кроки реалізації підкласам.
// Клас-шаблон визначає основну логіку алгоритму, а підкласи можуть змінювати або розширювати окремі кроки.

// Клас TeaMaker відповідає за загальні дії, необхідні для приготування чаю.
class TeaMaker {
  // Робимо метод makeTea, який викликає всі кроки приготування чаю по черзі boilWater, addTeaLeaves, #steepTea,
  makeTea() {
    this.boilWater(), 
    this.addTeaLeaves(), 
    this.#steepTea(), 
    this.pourIntoCup(), 
    this.addCondiments(), 
    this.serveTea()
  }
  // pourIntoCup, addCondiments, serveTea.
  // Робимо метод boilWater, який відповідає за кип'ятіння води та виводить в консоль Кип'ятимо воду....
  boilWater() {
    console.log("Кип'ятимо воду....")
  }
  // Робимо метод addTeaLeaves, який відповідає за додавання чайних листків та виводить в консоль Додаємо чайні листки....
  addTeaLeaves() {
    console.log("Додаємо чайні листки....")
  }
  // Робимо метод steepTea, що відповідає за заварювання чаю та виводить в консоль Заварюємо чай....
  #steepTea() {
    console.log("Заварюємо чай....")
  }
  // Робимо метод pourIntoCup, що відповідає за переливання чаю в чашку та виводить в консоль Переливаємо чай в чашку....
  pourIntoCup() {
    console.log("Переливаємо чай в чашку....")
  }
  // Робимо метод addCondiments, що залишається пустим і може бути перевизначений у підкласах.
  addCondiments() {
  }
  // Робимо метод serveTea, що відповідає за подачу чаю та виводить в консоль Чай подається!.
  serveTea() {
    console.log("Чай подається!")
  }
}

// Клас GreenTeaMaker є підкласом класу TeaMaker та додає інгредієнти для зеленого чаю.
class GreenTeaMaker extends TeaMaker {
  // Робимо метод addCondiments, який виводить в консоль Додаємо мед, щоб приготувати зелений чай...
  addCondiments() {
    console.log("Додаємо мед, щоб приготувати зелений чай...")
  }
}

// Клас BlackTeaMaker є підкласом класу TeaMaker та додає інгредієнти для чорного чаю.
class BlackTeaMaker extends TeaMaker {
  // Робимо метод addCondiments, який виводить в консоль Додаємо мед, щоб приготувати чорний чай...
  addCondiments() {
    console.log("Додаємо мед, щоб приготувати чорний чай...")
  }
}

console.log("Завдання 3 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо екземпляри класів GreenTeaMaker та BlackTeaMaker.
const greenTeaMaker = new GreenTeaMaker();
greenTeaMaker.makeTea();

const blackTeaMaker = new BlackTeaMaker();
blackTeaMaker.makeTea();
