import AuthLayout from "@/layouts/AuthLayout"
import Login from "@/views/Auth/Login"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        {/*    <Route element={<AppLayout />}>
                    <Route path='/' element={<DashboardView />} index />
                    <Route path='/projects/create' element={<CreateProjectView />} />
                    <Route path='/projects/:projectId' element={<ProjectDetailsView />} />
                    <Route path='/projects/:projectId/edit' element={<EditProjectView />} />
                    <Route path='/projects/:projectId/team' element={<ProjectTeamView />} />
                    <Route element={<ProfileLayout />}>
                        <Route path='/profile' element={<ProfileView />} />
                        <Route path='/profile/password' element={<ChangePasswordView />} />
                    </Route>
                </Route> */}

        <Route element={<AuthLayout />}>
          <Route path='/auth/login' element={<Login />} />
        </Route>

        {/* redirect to login is / or not found */}
        <Route path='/' element={<Navigate to="/auth/login" />} />
        <Route path='*' element={<Navigate to="/auth/login" />} />
        {/* <Route
          path='*'
          element={isLoggedIn ? <Navigate to='/' replace /> : <AuthLayout />}
        /> */}
      </Routes>
    </BrowserRouter>
  )
}