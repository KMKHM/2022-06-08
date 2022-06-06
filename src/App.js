import "./App.css";

function Header() {
  return (
    <header>
      <h1>
        <a href="/">Web</a>
      </h1>
    </header>
  );
} // return 값은 반드시! 하나의 태그여야 한다.
// 컴포넌트의 이름은 반드시 대문자로 시작해야 한다.
// js의 문법이 아닌 jsx 문법이다.(유사 자바스크립트)

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, Web!
    </article>
  );
}

function App() {
  return (
    // root 안쪽
    // Header, header 구분하기
    <div>
      <Header></Header>
      <header></header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
