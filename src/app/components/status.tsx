export default async function Status() {
    await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 4) * 1000));
    const values: Array<string> = ['Good', 'Error'];
    const index: number = Math.floor(Math.random() * 2);
    return (
        <div className="flex space-x-1 items-center text-sm">
            <div className={`text-${index === 0 ? 'green-700': 'red-700'}`}>{values[index]}</div>
        </div>

    )
}