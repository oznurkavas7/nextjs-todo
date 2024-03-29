import { prisma } from "../../db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
    "use server";

    const title = data.get("title")?.valueOf();

    if (typeof title !== "string" || title.length === 0) {
        throw new Error("title is required");
    }

    await prisma.todo.create({
        data: { title }
    })

    redirect("/todos")
}

export default function NewTodoPage() {
    return (
        <form action={createTodo} className="p-6 flex flex-col gap-4">
            <label htmlFor="title"> Title</label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="title"
                className="bg-gray-200 py-2 px-2 rounded"
            >
            </input>
            <button type="submit" className="bg-green-500 text-white py-2 rounded">Create</button>
        </form>
    );

}