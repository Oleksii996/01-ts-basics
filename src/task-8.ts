//Завдання 8. HTTP-запити (файл task-8.ts)

//Функція fetchPosts робить GET-запит до API та повертає список постів.

interface Post {
  id: number;
  title: string;
  body: string;
}

import axios from "axios";

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});

console.log(fetchPosts());
