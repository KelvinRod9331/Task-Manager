import { clearImmediate } from 'timers';

const fs = require('fs')





  //Without a callback
// fs.rmdir('folder-1');
//With a callback
// fs.rmdir('another-new-repo', (err, data) => {
//   if(err) console.log('Error!', err);
//   console.log('Deleted another new repo!')
// });

// for(var i = 1; i <= 100; i++){
//     fs.mkdir(`folder-${i}`, () => {
//   });
// }

// for(var i = 1; i <= 100; i++){
//     fs.rename(`folder-${i}`, `new-folder-${i}`);
// }

for (let i = 1; i <=100; i++) {
   
    fs.rmdir(`new-folder-${i}`, (err, data) => {
        if(err) console.log('Error!', err);
        console.log('Deleted another new repo!')
      });
    
}
