process.stdout.write('Welcome to Holberton School, what is your name?\n'); // print message

process.stdin.on('readable', () => { // écoute l'entré de l'utilisateur
  const name = process.stdin.read(); // assigne l'input de l'utlisateur à name
  if (name) { // si name n'est pas null
    process.stdout.write(`Your name is: ${name.toString()}`); // print message + input
  }
});

process.stdin.on('end', () => { // écoute l'event end et s'active lorsqu'il est fermé
  process.stdout.write('This important software is now closing\n'); // print message
});
