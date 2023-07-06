export default async function Count() {
    await fetch('https://jsonplaceholder.typicode.com/todos/1', {cache: "no-store"});
    await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 4) * 1000));
    return (
        <div className="flex space-x-1 items-center text-sm">
            <div>Count: </div>
            <div className="bg-zinc-300 rounded px-1 py-0.5">10</div>
        </div>

    )
}
