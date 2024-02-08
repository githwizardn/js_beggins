

let point = Number(prompt("შეიყვანეთ თქვენი ქულა:"))
 if (point >= 100 && point <= 0) {
   console.log("ERROR ! არასწორი ქულა");
 } else if (point >= 91 && point <= 100) {
    console.log("თქვენი შეფასებაა A");;
 } else if (point >= 81 && point <= 90) {
    console.log("თქვენი შეფასებაა B");;
 } else if (point >= 71 && point <= 80) {
    console.log("თქვენი შეფასებაა C");;
 } else if (point >= 61 && point <= 70) {
    console.log("თქვენი შეფასებაა D");;
 } else if (point >= 51 && point <= 60) {
    console.log("თქვენი შეფასებაა E");;
 } else if (point >= 41 && point <= 50) {
   console.log("თქვენი შეფასებაა FX");
 }  else if (point >= 0 && point <= 40) {
    console.log("თქვენი შეფასებაა F");
  }
  else{
    console.log("გთხოვთ შეიყვანეთ სწორი მონაცემები")
  }







let text1 = prompt("შეიყვანეთ ტექსტი:");
let wordToSearch = prompt("შეიყვანეთ სიტყვა მოსაძებნად:");


let result = text1.search(wordToSearch);

if(result !== -1) {
    console.log("ტექსტი შეიცავს სიტყვას '" + wordToSearch + "'.");
} else {
    console.log("სიტყვა ვერ მოიძებნა კიდევ სცადეთ");
}




let text = prompt("შეიტვანეთ ტექსტი");

let wordToFind = prompt("შეიყვანეთ საძიებო სიტყვა");

if (text.includes(wordToFind)) {
    console.log(`ტექსტი შეიცავს სიტყვას '${wordToFind}'.`);

    let newWord = prompt(`სიტყვა '${wordToFind}' ნაპოვნია. შეიყვანეთ სიტყვა რომლითაც შევცვლით ნაპოვნ სიტყვას:`);

    let newText = text.replace(newWord, wordToFind);

    console.log(`ახალი ტექსტი: ${newText}`);
} else {
    console.log(`ტექსტი არ შეიცავს სიტყვას '${wordToFind}'.`);
}



let num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი:"));
let num2 = Number(prompt("შეიყვანეთ მეორე რიცხვი:"));
let num3 = Number(prompt("შეიყვანეთ მესამე რიცხვი:"));

let largest, middle, smallest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
    if (num2 >= num3) {
        middle = num2;
        smallest = num3;
    } else {
        middle = num3;
        smallest = num2;
    }
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
    if (num1 >= num3) {
        middle = num1;
        smallest = num3;
    } else {
        middle = num3;
        smallest = num1;
    }
} else if (num3 >= num1 && num3 >= num2) {
    largest = num3;
    if (num1 >= num2) {
        middle = num1;
        smallest = num2;
    } else {
        middle = num2;
        smallest = num1;
    }
}

console.log(`რიცხვები უდიდესიდან უმცირესისკენ ლაგდება ასე : ${largest}, ${middle}, ${smallest}.`);
