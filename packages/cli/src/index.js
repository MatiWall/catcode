#!/usr/bin/env node

const { program } = require('commander');
const { createServer } = require('vite');
const http = require('http');
const fs = require('fs');

program
  .requiredOption('-c, --component <name>', 'Specify the name of the component to start')
  .parse(process.argv);

const options = program.opts();
const componentName = options.component;

// Read the index.js file
const indexFilePath = './src/index.js';
let componentContent;
try {
  componentContent = fs.readFileSync(indexFilePath, 'utf-8');
} catch (error) {
  console.error(`Error reading ${indexFilePath}: ${error}`);
  process.exit(1);
}

// Generate HTML content with the component mounted
const indexHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Component</title>
</head>
<body>
  <div id="root"></div>
  <script type="module">
    ${componentContent} // Include the content of index.js directly
    import React from '/@modules/react'; // Remap bare import to local module
    import ReactDOM from '/@modules/react-dom'; // Remap bare import to local module
    
    ReactDOM.render(React.createElement(${componentName}), document.getElementById('root'));
  </script>
</body>
</html>`;

// Create HTTP server to serve the generated HTML content
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtmlContent);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// Start the HTTP server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// Start Vite server in the background
createServer({
  server: {
    middlewareMode: true,
    watch: {},
    port: 3001, // Use a different port from the HTTP server
  },
  optimizeDeps: {
    include: ['react', 'react-dom'] // Include React and ReactDOM in optimization
  }
}).then(() => {
  console.log('Vite server running at http://localhost:3001/');
}).catch(error => {
  console.error(`Error starting the Vite server: ${error}`);
  process.exit(1);
});
