// 打印当前目录所有文件



const fs = require('fs');
const path = require('path');
// 相当于在此处执行了一次proto.js
require('./proto.js');

// 获取当前有没有传入目标路径,此处有坑，不能直接用__dirname
var target = path.join(__dirname, process.argv[2] || './');



fs.readdir(target, (err, files) => {
  files.forEach(file=> {
    console.time(file);
    // console.log(path.join(target, file));
    // 获取文件信息
    fs.stat(path.join(target, file), (err, stats) => {
      // stats.mtime.
      console.log(`${stats.mtime.format('yyyy/MM/dd HH:mm') }\t${stats.size}\t${file}`);
      console.timeEnd(file);
    });
  });
});
// 如果1.txt文件大小比2.txt大，读取时间比2.txt的长，很有可能2.txt文件的信息先输出。
// 为了解决这个问题，可以考虑用同步的方式。