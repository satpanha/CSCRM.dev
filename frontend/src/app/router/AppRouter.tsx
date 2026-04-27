import { Navigate, Route, Routes } from 'react-router-dom'
import AuthPage from '../../features/contacts/pages/AuthPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/auth' replace />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='*' element={<Navigate to='/auth' replace />} />
    </Routes>
  )
}
