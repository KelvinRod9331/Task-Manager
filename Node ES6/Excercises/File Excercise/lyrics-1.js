const fs = require('fs')

fs.writeFile('lyrics-1.txt',
`I found a love for me  \nDarling just dive right in \n` , (err) => {
    if (err) {
      throw err;
    }
    console.log('The file has been saved!');
  });


fs.writeFile('lyrics-2.txt',
`And follow my lead  \nWell I found a girl beautiful and sweet` , (err) => {
    if (err) {
      throw err;
    }
    console.log('The file has been saved!');
  });

  var lyricsData;

fs.readFile('lyrics-1.txt', function(err, data) {
    if (err) throw err;
    lyricsData = data.toString()
    fs.readFile('lyrics-2.txt', function(err, data) {
        if (err) throw err;
        lyricsData += data.toString()
        fs.writeFile('lyrics-3.txt',lyricsData, (err) => {
            if (err) {
              throw err;
            }
            
          });
      });
   
  });
    

  