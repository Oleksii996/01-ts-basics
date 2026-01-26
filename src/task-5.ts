//Задача 4. Функції (файл task-4.ts)

function logStatus(status: "loading" | "success" | "error"): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");
logStatus("success");
logStatus("error");
