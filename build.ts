import { exec } from 'child_process';

const projectPath = 'apps/test-nx/tsconfig.app.json'; // Adjust this to your actual path
const command = `npx tsc -p ${projectPath}`;

const start = Date.now();

exec(command, (error, stdout, stderr) => {
  const duration = Date.now() - start;
  console.log(`Build completed in ${duration} ms`);

  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
});

// ts-node build.ts
