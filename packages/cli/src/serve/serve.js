#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const open = require('open');
const { exec } = require('child_process');

program
  .command('serve <component>')
  .description('Serve the specified React component')
  .action((component) => {
    // Resolve the component path
    const componentPath = path.resolve(component);

    // Create a temporary HTML file
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>React Component</title>
      </head>
      <body>
          <div id="root"></div>
          <script src="${componentPath}"></script>
      </body>
      </html>
    `;

    const tempFilePath = path.join(__dirname, 'temp.html');

    // Write HTML to a temporary file
    require('fs').writeFileSync(tempFilePath, html);

    // Open the temporary file in the default browser
    open(tempFilePath);

    // Start a development server
    const serverCommand = `npx http-server ${path.dirname(componentPath)} -c-1 -o -p 3000`;
    exec(serverCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error starting server: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Server stderr: ${stderr}`);
        return;
      }
      console.log(`Server stdout: ${stdout}`);
    });
  });

program.parse(process.argv);
