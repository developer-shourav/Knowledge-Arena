
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Blogs from "./components/Blogs/Blogs";

function App() {

  return (
    <div className="">
     {/*---- header ---- */}
     <header className="sticky top-0">
       {/* --Navbar-- */}
     <Navbar> </Navbar>
     </header>

    {/*---- Main ---- */}
    <main>
      <div className="grid grid-cols-1 my-8  md:grid-cols-3 gap-5">
        <div className=" md:col-span-2">
          <Blogs> </Blogs>
        </div>

        <div>
          <Cart> </Cart>
        </div>

      </div>
    </main>

    </div>
  );
}

export default App;
