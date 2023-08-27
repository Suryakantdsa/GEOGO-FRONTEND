import Homepage from "./Component/Homepage"
import Navbar from "./Component/Navbar"
import SideNavbar from "./Component/SideNavbar"


function App() {

  return (
    <>
      <div className="w-screen h-screen">
        <Navbar/>
        <main className="flex h-[90%] justify-center">
          <SideNavbar/>
          <Homepage/>
        </main>
      
      </div>

    </>
  )
}

export default App
