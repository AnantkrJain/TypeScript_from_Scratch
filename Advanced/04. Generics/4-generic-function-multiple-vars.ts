// multiple type variables
function displayType<T, U>(id: T, name: U): void {
   console.log(`id: ${id} (type: ${typeof id})`)
   console.log(`name: ${name} (type: ${typeof name})`);
}

displayType<number, string>(1, "Steve");
// output
// id: 1 (type: number)
// name: Steve (type: string)
