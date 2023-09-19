import axios from 'axios';

// 데이터 읽어오기 Read, Http methods get
export async function readData() {
  const { data } = await axios.get('http://localhost:3001/todolist');
  // console.log(data)
  return data;
}

// 데이터 추가하기 Create, Http methods post
export async function createData(todo) {
  await axios.post('http://localhost:3001/todolist', todo);
}

// 데이터 수정하기 Update, Http methods patch
export async function updateData({ id, updateTodo }) {
  await axios.patch(`http://localhost:3001/todolist/${id}`, updateTodo);
}

// 데이터 삭제하기 Delete, Http methods delete
export async function deleteData(id) {
  await axios.delete(`http://localhost:3001/todolist/${id}`);
}