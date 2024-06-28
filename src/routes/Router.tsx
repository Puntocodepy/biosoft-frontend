import AuthLayout from "@/layouts/AuthLayout"
import VerticalLayout from "@/layouts/VerticalLayout"
import Dashboard from "@/views/Admin/Dashboard/Dashboard"
import Login from "@/views/Auth/Login"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/admin' element={<VerticalLayout />}>
            <Route path='dashboard' element={<Dashboard />} /> 
            {/* <Route path='/projects/create' element={<CreateProjectView />} />
            <Route path='/projects/:projectId' element={<ProjectDetailsView />} />
            <Route path='/projects/:projectId/edit' element={<EditProjectView />} />
            <Route path='/projects/:projectId/team' element={<ProjectTeamView />} />
            <Route element={<ProfileLayout />}>
                <Route path='/profile' element={<ProfileView />} />
                <Route path='/profile/password' element={<ChangePasswordView />} />
            </Route> */}
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>

        {/* redirect to login is / or not found */}
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='*' element={<Navigate to="/login" />} />
        {/* <Route
          path='*'
          element={isLoggedIn ? <Navigate to='/' replace /> : <AuthLayout />}
        /> */}
      </Routes>
    </BrowserRouter>
  )
}