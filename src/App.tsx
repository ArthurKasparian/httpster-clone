import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import './styles/main.scss'

import RootLayout from './layouts/RootLayout'
import FeedLayout from "./layouts/FeedLayout.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Newsletter from "./routes/Newsletter.tsx";
import NotFound from "./routes/NotFound.tsx";
import Submission from "./routes/Submission.tsx";
import FilteredFeed from "./routes/FilteredFeed.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<FeedLayout />}>

            <Route index element={<Home />}/>
            <Route path="about" element={<About />} />

            <Route
                path=":filter/:id"
                element={<FilteredFeed />}
            />

        </Route>

        {/* Filtered by type or style */}


        <Route path="website"></Route>

        <Route path="newsletter" element={<Newsletter />} />
        <Route path="contact" element={<Submission />} />

        <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App