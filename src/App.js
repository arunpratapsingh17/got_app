import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import HomeDisplay from './components/HomeDisplay';
import Header from './components/Header';
import DataList from './components/DataList';
import DataDisplay from './components/DataDisplay';
function App() {
  const HeaderContent=[{
    name:"Books",
    link:"/books"
  },
  {
    name:"Characters",
    link:"/characters"
  },
  {
    name:"Houses",
    link:"/houses"
  },
]
  return (
    <div className="App">
      <Header HeaderContent={HeaderContent}/>
      <Routes>
        <Route path="/" exact element={<HomeDisplay/>} />
        <Route path="/:dataList" exact element={<DataList/>} />
        <Route path="/:dataList/:dataID" exact element={<DataDisplay/>} /> 
      </Routes>
    </div>
  );
}

export default App;
