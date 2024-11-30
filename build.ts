import { exec } from 'child_process';

const projectPath = 'apps/test-nx/tsconfig.app.json';
const projectPath2 = 'apps/test-nx-2/tsconfig.app.json';
const command = `npx tsc -p ${projectPath} && npx tsc -p ${projectPath2}`;

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
