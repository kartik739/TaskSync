interface Board {
    columns: map<TypedColumn, Column>;
}

type TypedColumn = 'todo' | 'in-progress' | 'done';

interface Column {
    id: TypedColumnId;
    todos: Todo[];
}

interface Todo {
    $id: string;
    $credentials: string;
    title: string;
    status: TypedColumn;
    image?: string;
}

interface Image{
    bucketId: string;
    fileId: string;
}