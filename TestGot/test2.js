// Ваш текст пишите в конце в console.log. Функция выведет 3 первых часто встречаемых слова

function top(text) {
  let wordCount = {}
  text = text.toLowerCase().split(/[^А-Яа-яA-Za-z0-9_']+/g)
  for (let word of text) { 
    if (!word) {
      continue
    }
    if (word in wordCount) {
      wordCount[word] ++ // += 1
    } else {
      wordCount[word] = 1 
    }
  }
  if (Object.keys(wordCount).length < 3) {
    return []    // если в объекте меньше 3 слов, создаю пустой массив
  }
  let wordArray = []
  for (let word in wordCount) {
    wordArray.push({
      word: word,
      count: wordCount[word]
    })
  }
  wordArray.sort(function(a, b) {
    return b.count - a.count
  })
  console.log(wordArray)
  return wordArray.slice(0,3).map(function (word) {
    return word.word
  })
}

console.log(top(""))