import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListPage } from './Pages/listPage/listPage'
import { CreatePage } from './Pages/createPage/createPage';
import { AdminPage } from './Pages/adminPage/adminPage';
import { CredentialsPage } from './Pages/credentialsPage/credentialsPage';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPage></ListPage>}></Route>
        <Route path='/admin' element={<AdminPage></AdminPage>}></Route>
        <Route path='/new' element={<CreatePage></CreatePage>}></Route>
        <Route path='/credentials' element={<CredentialsPage></CredentialsPage>}></Route>
        
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
