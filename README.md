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
