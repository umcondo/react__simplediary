import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "강대국",
    content: "안녕",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "임창운",
    content: "안녕",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "추홍규",
    content: "안녕",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "민지원",
    content: "안녕",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "김대희",
    content: "안녕",
    emotion: 4,
    created_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
