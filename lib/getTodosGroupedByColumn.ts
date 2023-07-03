import { database } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
    const data = await database.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID! 
    );

    const todos = data.documents; 

    const columns = todos.reduce((acc, todo) => {
        if(!acc.get(todo.status)){
            acc.set(todo.status, {
                id: todo.status,
                todos: []
            })
        }

        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $credentials: todo.$credentials,
            title: todo.title,
            status: todo.status,

            //get the image if it exists on the todo
            ...(todo.image && {image: JSON.parse(todo.image)})
        })
    }, new Map<TypedColumn, Column>());

    // if columns doesn't have inprogress, todo and done, add them with empty todos
    const columnTypes: TypedColumn[] = ['todo', 'in-progress', 'done'];
    for (const columnType of columnTypes){
        if(!columns.get(columnType)){
            columns.set(columnType, {
                id: columnType,
                todos: []
            })
        }
    }
};