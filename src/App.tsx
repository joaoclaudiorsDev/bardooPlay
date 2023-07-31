import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Album from './components/Album/Album';
import Layout from './components/Layout/Layout';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Route>
    </Routes>
  );
}

export default App;
