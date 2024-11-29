import { exec } from 'child_process';

const command = `nx run test-nx:build`;
const start = Date.now();

exec(command, (error, stdout, stderr) => {
  const duration = Date.now() - start;
  console.log(`Build completed in ${duration} ms`);

  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
});

// ts-node build-nx.ts
