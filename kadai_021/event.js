const btn = document.getElementById('btn');
const text = document.getElementById('text');

//2秒の待ち時間を設定し、非同期処理を実行する
setTimeout(() => {
  //取得した文字列にボタンをクリックしましたを出力する
  console.log('ボタンをクリックしました');
  text.textContent = 'ボタンをクリックしました';
}, 2000);



// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  //取得した文字列にボタンをクリックしましたを出力する
  console.log('ボタンをクリックしました');
  text.textContent = 'ボタンをクリックしました';
});