//変数の宣言
letnum;

//変数の代入
letnum = 15;

//変数numが3と5の倍数の場合： 「3と5の倍数です」という文字を出力
if (num % 3 === 0) && (num % 5 === 0){
  console.log('3と5の倍数です');
}

//変数numが3の倍数の場合： 「3の倍数です」という文字を出力
elseif (num % 3 === 0){
  console.log('3の倍数です');
}

//変数numが5の倍数の場合： 「5の倍数です」という文字を出力
elseif (num % 5 === 0){
  console.log('5の倍数です');
}

//それ以外の場合： 変数numの値を出力
else {
  console.log(num);
}





