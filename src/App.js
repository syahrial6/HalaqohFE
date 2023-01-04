
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Beranda from "./pages/Beranda";
import Guru from "./pages/Guru";
import Dashboard from "./pages/Dashboard";
import Tambah from "./pages/Tambah";
import Edit from "./pages/Edit";
import TambahUser from "./pages/TambahUser";
import User from "./pages/User";
import EditUser from "./pages/EditUser";
import ListWali from "./pages/ListWali";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/beranda" element={<Beranda/>} />
        <Route path="/view/:id" element={<ListWali/>} />
        <Route path="/dashboard/:id" element={<Guru/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/tambah_user" element={<TambahUser/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/dashboard/:id/tambah" element={<Tambah/>} />
        <Route path="/dashboard/edit/:uuid" element={<Edit/>} />
        <Route path="/dashboard/edit_guru/:uuid" element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
