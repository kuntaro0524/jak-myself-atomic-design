# jak-myself-atomic-design

Created with CodeSandbox

# template 作成 2

## Header にリンクを挿入した

- react-router-dom をインポート
- components/atom/Header.jsx を作成
  ++ `Linkを利用してrouterを設定`
- components/template/HeaderOnly.jsx から Header 　を読み込む

# template 作成 ３

- 表示に　 styled component を当てていく

# template 作成 4

- components/template/DefaultLayout.jsx 作成
- components/atom/Footer.jsx 作成 →Header のコピーなので内容はデタラメ
- DefaultLayout.jsx には Header と Footer を含めるレイアウトを作成
- App.js からそれを呼び出してヘッダとフッタが表示されることを確認

# template 作成 5

- components/template/DefaultLayout.jsx 作成
- components/atom/Footer.jsx 作成 →Header のコピーなので内容はデタラメ
- DefaultLayout.jsx には Header と Footer を含めるレイアウトを作成
- App.js からそれを呼び出してヘッダとフッタが表示されることを確認

# page 作成１

- router/Router.jsx を準備して「出し分け」を記述。
- それぞれの URL で何を表示するかを設定。
- それを App.jsx から呼び出して使えるようにした。

# page 作成 2

- pages コンポーネントを作成。(Top.jsx / Users.jsx)
- App.jsx→Router.jsx→ 出し分け
- この部分に layout コンポーネントを適用して header とか表示されるようにした。

# page 作成 3

- Users.jsx(pages)でカードを１０枚表示するように設定
- Users.jsx の中身に App.jsx にいた　 User 情報をもってきた
- ダミー配列を作成（ほぼ同じ内容の user 情報）
- map 関数でそれを表示（ポイント）＠Users.jsx

# page 作成 4

- Users.jsx の中で Card の表示方法で styled component を利用したスタイルを当てた
- じゃけぇ先生の言っているように表示の方法として CSS で grid を当てるのは使いようによって素晴らしいので勉強するようにとのこと
