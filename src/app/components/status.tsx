export default async function Status() {
    await fetch('https://jsonplaceholder.typicode.com/todos/1', {cache: "no-store"});
    await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 4) * 1000));
    const values: Array<string> = ['Good', 'Error'];
    const index: number = Math.floor(Math.random() * 2);
    return (
        <div className="flex space-x-1 items-center text-sm text-red-700 text-green-700">
            <div className={`text-${index === 0 ? 'green-700': 'red-700'}`}>{values[index]}</div>
        </div>

    )
}
