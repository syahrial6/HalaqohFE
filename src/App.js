
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
import Lihatsiswa from "./pages/Lihatsiswa";
import Detail from "./pages/Detail";
import Cetak from "./pages/Cetak";
import Notfound from "./pages/404";

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
        <Route path="/guru/tambah" element={<TambahUser/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/dashboard/:id/tambah" element={<Tambah/>} />
        <Route path="/dashboard/edit/:uuid" element={<Edit/>} />
        <Route path="/dashboard/edit_guru/:uuid" element={<EditUser/>} />
        <Route path="/lihat_siswa" element={<Lihatsiswa/>} />
        <Route path="/siswa/:id" element={<Detail/>} />
        <Route path="/siswa/:id/cetak" element={<Cetak/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
