import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WithHuman from './Components/withHuman'
import WithAi from './Components/Ai/WithAi'

function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element: <WithHuman/>
      },
      {
       path: '/withai',
       element: <WithAi />
      }
     
  ])

  return (
   
    <>
      <RouterProvider router={router}/>
    </>
  )
}
export default App