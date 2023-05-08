import './App.css';
import Admin_Page from './component/admin/Admin_Page';
import Projects from './component/project/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Quick_task from './component/quicktask/Quick_task';
import Quick from './component/shared/Quick';
import Test from './component/shared/Test';
import Menu from './component/shared/Menu';
import Task_details from './component/shared/Task_details';
import Categories from './component/categories/categories';
import User from './component/users/user';
import Chats from './component/chats/chats';
import Setting from './component/Settings/setting';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Admin_Page />}></Route>
          <Route path='/project' element={<Projects />}></Route>
          <Route path='/quicktask' element={<Quick_task />}></Route>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/chats' element={<Chats />}></Route>
          <Route path='/user' element={<User />}></Route>
          <Route path='/Settings' element={<Setting />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
