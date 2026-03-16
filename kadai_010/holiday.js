const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文の場合:0から1づつ増やし、holidaysの要素数分だけ取り出す
for (let i = 0 ; i <= 16 ; i += 1) {
  console.log(holidays[i]);
}

// while文の場合:要素数が17未満の場合holidaysの要素数分だけ取り出す
while (let i = 0 ; i <= 16 ; i += 1 ) {
  console.log(holidays[i])
}