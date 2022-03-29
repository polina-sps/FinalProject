import DataList from './components/DataList'
import ErrorMessage from './components/ErrorMessage'
import Preloader from './components/Preloader'

function App() {
  return (
    <div className="App">
      <Preloader />
      <ErrorMessage />
      <DataList url="https://my-json-server.typicode.com/typicode/demo/comments" />
    </div>
  )
}

// Form, CreateForm, CreateConfigForm, CreatePage
// SozdatFormu
// temp, example, probe, myFucn
// a, b, c
// const decor = (__a, b, c func) => {}
// прееменные, константы, классы, компоненты - существительные, функции - глаголы
// структура Действие - Описание - Цель: CreateUserSecurityDataForm
//
// SOLID
//

// const Header = ({ header, navigation }) => {
//   const onSubmit = () => {};
//   return (
//     <div>
//       <h1>{header}</h1>
//       <Nav navigation={navigation} />
//       <Form onSubmit={onSubmit} />
//     </div>
//   );
// };

// const fetchData = async () => {
//   const res = await fetch('');
//   const data = await res.json();

//   return data;

// }

// const getUserData = async () => {
//   const data = await fetchData();

//   const parsedData = getParsedData()

//   const filteredData = getFilteredData()

//   return filteredData;
// }

// const showError = (error, log) => {
//   log(error)
// };

// GET users
// GET users/:id
// POST users
// DELETE users/:id
// PUT users/:id

export default App
