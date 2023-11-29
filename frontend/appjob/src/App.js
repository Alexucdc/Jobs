import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreatePage } from './Pages/createPage/createPage';
import { ListPage } from './Pages/listPage/listPage';
import { CredentialsPage } from './Pages/credentialsPage/credentialsPage';
import { UpdatePage } from './Pages/updatePage/updatePage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPage></ListPage>}></Route>
        <Route path='/new' element={<CreatePage></CreatePage>}></Route>
        <Route path='/credentials' element={<CredentialsPage></CredentialsPage>}></Route>
        <Route path='/update/:id' element={<UpdatePage></UpdatePage>}></Route>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
