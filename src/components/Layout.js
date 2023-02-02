import React from 'react'
import { FiUsers, FiLogOut, FiUser, FiHome } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset,Logout } from '../features/AuthSlices'
import Navigation2 from './Navigation2'

function Layout({ children }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(((state)=> state.auth));

    const logout = ()=>{
        dispatch(Logout())
        dispatch(reset());
        navigate("/")
    }
    return (
        <React.Fragment>
            <Navigation2 />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='sidebar col-auto  bg-primary'>
                        <ul className='sidebar-menu'>
                            <br></br>
                            <li>
                                <a className='nav-link px-2' href='/user'><FiUser />
                                <span className='ms-1 d-none d-sm-inline'>Lihat User</span>
                                </a>
                            </li>
                            <br></br>
                            <li className="sidebar-menu">
                                <a className='nav-link px-2' href='/lihat_siswa'><FiUsers />Lihat Siswa</a>
                            </li>
                            <br></br>
                            <li className="sidebar-menu">
                                <a className='nav-link px-2' href='/dashboard'><FiHome />Dashboard</a>
                            </li>
                            <br></br>
                            <li className="sidebar-menu">
                                <a className='nav-link px-2' onClick={logout}><FiLogOut />Logout</a>
                            </li>
                            <br></br>
                        </ul>
                    </div>
                    <div className='col'>
                    <main>
                        {children}
                    </main>

                </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Layout