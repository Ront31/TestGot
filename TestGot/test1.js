// Слово для зашифровки и расщифровки и количество шифрований пишите в конце в console.log

function encrypt_1(text) {
  let even = ""; // задаю строку, в которую буду "складывать" четные элементы строки (2,4,6...)
  let odd = ""; // задаю строку, в которую буду "складывать" нечетные элементы строки (1,3,5...)
  for (let i=0; i<text.length; i++) {
    if (i % 2 == 1) { // если есть остаток по модолю в элементах строки (1,3,5... элементы) значит это четные элементы строки (ведь отсчёт начинается с 0)
      even += text[i];
    } else {
      odd += text[i];
    }
  }   
 return even+odd
}

function encrypt (text, n) {
  if (!text || n <= 0) {
    return text
  } 
  for (let i=0; i<n; i++) { // перебираю n раз функцию encrypt_1
    text = encrypt_1(text)
  }
  return text
}

function decrypt_1(text) {
 let even = text.slice(0, text.length/2)
 let odd = text.slice(text.length/2, text.length)
 let result = ""
 for (let i = 0; i < text.length/2; i++) {
   result += odd[i]
   if (even[i]) {   // != undefined 
     result += even[i]
   }
 }
  return result
}

function decrypt (text, n) {
  if (!text || n <= 0) {
    return text
  } 
  for (let i=0; i<n; i++) { // перебираю n раз функцию encrypt_1
    text = decrypt_1(text)
  }
  return text
}

console.log (encrypt("Ваша строка", 1))
console.log (decrypt(encrypt("Ваша строка", 1), 1))





