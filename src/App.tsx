import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import HomeworkPage from './routes/homework';
import Main from './routes/main';



export default function App() {
  return (
    <BrowserRouter>
      <Link to="/homework">Homework</Link>
      <Link to="/">homepage</Link>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/homework' element={<HomeworkPage />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

