import { AuthProvider } from '../contexts/AuthContext'
import Signup from './Authentication/Signup'
import Profile from './Authentication/Profile'
import Login from './Authentication/Login'
import ForgotPassword from './Authentication/ForgotPassword'
import UpdateProfile from './Authentication/UpdateProfile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RouteType from './Routes/Routes'
import Dashboard from './google-drive/Dashboard'

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route element={<RouteType.Public />}>
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
            </Route>

            <Route element={<RouteType.Private />}>
              <Route path='/user' element={<Profile />} />
              <Route path='/update-profile' element={<UpdateProfile />} />

              {/* Drive */}
              <Route path='/' element={<Dashboard />} />
              <Route path='/folder/:folderId' element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default App
