let sentence=prompt("Cümlenizi girin ");
const letterCount={};
sentence=sentence.toLocaleLowerCase().replace(/[^a-z]/g,'');

for (const char of sentence) {
  if(letterCount[char]){
    letterCount[char]++;
  }else{
    letterCount[char]=1;
  }
}
console.log(letterCount);