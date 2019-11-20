console.log("hello");
//iteration 1
const hacker1 ="luis";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "pedro";

console.log(`The navigator's name is ${hacker2}`);

// iteration 2

if(hacker1.length > hacker2.length){
  const numChar= hacker1.length;
 console.log(`The driver has the longest name, it has ${numChar} characters`);
} else if(hacker1.length < hacker2.length){
  const numChar=hacker2.length;
  console.log(`It seems that the navigator has the longest name, it has ${numChar} characters.`);
} else if(hacker1.length === hacker2.length){
  const numChar = hacker2.length;
  console.log(`Wow, you both have equally long names, ${numChar} characters!`)
}

//bonus 1

const paragraph="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat";

function getWordCount(para){
let wordCount=1;
for(let i=0;i<para.length;i++){
  if(paragraph[i] === " "){
    wordCount++;
  }
}
return wordCount;
}

function getEtCount(para){
  let counter=0;
  
  for(let i=0;i<para.length;i++){
    if(para[i].toLowerCase() ==="e" && para[i+1] ==="t" && para[i-1] ===" " && para[i+2] === " " ){
      counter++;
    }
  }
  return counter;
}


console.log(getWordCount(paragraph));
console.log(getEtCount(paragraph));


// bonus 2

const phraseToCheck ="racecar";

function checkPalindrome(phrase){
let word1;
let word2;
for(let i=0,j=phrase.length-1;i<phrase.length && j>0; i++,j--){
  word1+=phrase[i];
  word2+=phrase[j];
}
if(word1 === word2){
  return "it is a palindrome";
} else{
  return "not a palindrome"
}

}

console.log(checkPalindrome(phraseToCheck));
