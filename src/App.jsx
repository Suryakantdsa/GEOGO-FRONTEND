import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddMovie from "./Component/AddMovie"
import Body from "./Component/Body"
import ErrorPage from "./Component/ErrorPage"
import { Provider } from "react-redux"
import store from "./Component/helper/Store/store"


function App() {

  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} errorElement={<ErrorPage/>}/>
          <Route path='/addmovie' element={<AddMovie />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
