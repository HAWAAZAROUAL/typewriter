let sentence = "hello there from lighthouse labs";
sentence += '\n';
let iterator = 1
for (const char of sentence) {
  setTimeout(() => {
   process.stdout.write(char) + '\n'; 
  }, iterator ++ * 50)

}
