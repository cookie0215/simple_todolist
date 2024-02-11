import AddList from "./components/AddList";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const data = [
    {
      id: 1,
      text: '리액트 공부하기',
    },
    {
      id: 2,
      text: '1시간 운동하기',
    },
    {
      id: 3,
      text: '영어공부하기',
    },
  ]

  return (
    <>
      <TodoList listItems={data} />
      <AddList />
    </>
  );
}

export default App;
