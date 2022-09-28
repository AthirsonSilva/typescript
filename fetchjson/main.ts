import axios from 'axios';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

let result = axios({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then((response: any) => {
        const todo: Todo = {
            userId: response.data.userId,
            id: response.data.id,
            title: response.data.title,
            completed: response.data.completed
        }

        // console.table([todo.userId, todo.id, todo.title, todo.completed]);
        logTodo(todo.userId, todo.id, todo.title, todo.completed);
    })
    .catch((error: any) => console.log(error));
    
function logTodo(userId: number, id: number, title: string, completed: boolean): void {
    console.table({userId, id, title, completed});
}