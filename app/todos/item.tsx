"use client"

interface TodoItemProps {
    id: string
    title: string,
    done: boolean,
    createAt: Date,
    updateAt: Date,
    toogleTodo: (id: string, done: boolean) => void;
}

export default function TodoItem({
    id,
    title,
    done,
    createAt,
    updateAt,
    toogleTodo
}: TodoItemProps) {
    return (
        <li className="flex items-center gap-6">
            <input type="checkbox" defaultChecked={done} onChange={e => toogleTodo(id, e.target.checked)}></input>
            <div>
            <h2 className="flex flex-col gap-1">{title}</h2>
            <p className="text-gray-500">{updateAt.toLocaleDateString()}</p>
            </div>
        </li>
    );
}