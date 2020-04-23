// never
// function returning never must have unreachable end point
function error(message: string): never {
   throw new Error(message);
}

error('Network error!');
