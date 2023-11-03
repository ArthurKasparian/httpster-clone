import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import './styles/main.scss'

import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/*<Route path="/" element={<FeedLayout />}>

        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />

        <Route path="type">

        </Route>

        <Route path="style">

        </Route>

      </Route>

      <Route path="website"></Route>

      <Route path="newsletter" element={<Newsletter />} />
      <Route path="contact" element={<SubmitWebsite />} />

      <Route path="*" element={<NotFound />} />*/}
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
