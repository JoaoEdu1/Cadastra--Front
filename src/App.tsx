import { AuthProvider } from './providers/AuthProvider'
import { RegisterProvider } from './providers/RegisterProvider'
import { MainRoutes } from './routes'

function App() {

  return (
    <>
      <AuthProvider>
        <RegisterProvider>
          <MainRoutes/>
        </RegisterProvider>
      </AuthProvider>
    </>
  )
}

export default App
