const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        deleteFile(filename) {
          return new Promise((resolve, reject) => {
            fs.unlink(filename, (err) => {
              if (err) {
                console.error(`Failed to delete file: ${filename}`);
                return reject(err);
              }
              console.log(`File deleted: ${filename}`);
              resolve(null);
            });
          });
        },
      });
    },
  },
});