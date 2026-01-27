//Задача 7. Типізація Promise (файл task-7.ts)

//Функція getMessage повертає проміс, який через затримку повертає рядок.

function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));
console.log(getMessage());
