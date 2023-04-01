
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState} from "react";
import Cart from "./components/Cart/Cart";
import Blogs from "./components/Blogs/Blogs";
import Blog from "./components/Blog/Blog";
import { addToCart } from "./utilities/utilities";
import Footer from "./components/Footer/Footer";
import questionImg from "./assets/images/question.png";

function App() {

   const [allBlogs, setAllBlogs] = useState([]);
   const [readingTime, setReadingTime] = useState(0);
   const [cartData, setCardData] = useState([]);
   
   
   /* Total Reading Time Calculator Function */
   const addReadingTime = (time) => {
      const newTimeTotal = readingTime + time ;
      setReadingTime(newTimeTotal)
   }

     /* Bookmark Data in local Storage */

      const addToBookMark = (id) => {
      const bookmarkBlog = allBlogs.find( blog => blog?.id === id);
      const title = bookmarkBlog?.title;
      addToCart(id, bookmarkBlog?.title)
      const storedData = JSON.parse(localStorage.getItem('bookMarkedItems'));
      const cartDataAfterBookmarked = [{id, title}]
      setCardData(storedData, ...cartDataAfterBookmarked)
    };
    

  useEffect( ( ) => {
    fetch('data.json')
    .then ( res => res.json())
    .then ( data => setAllBlogs(data))
  }, [ ])
  
  /* Get Data form localStorage  */

  useEffect( () => {
    const storedData = JSON.parse(localStorage.getItem('bookMarkedItems'));
    setCardData(storedData)
  }, [allBlogs])

  return (
    <div >
     {/*---- header ---- */}
     <header className="sticky top-0 z-50">
       {/* --Navbar-- */}
     <Navbar> </Navbar>
     </header>

    {/*---- Main ---- */}
    <main>

      {/* -----Blogs sections----- */}
      <div id="blog" className="grid grid-cols-1 my-8  md:grid-cols-3 gap-5">
        <div className=" md:col-span-2">
          <Blogs allBlogs = {allBlogs} addToBookMark ={addToBookMark} addReadingTime = {addReadingTime}> </Blogs>
        </div>

      {/* -----Cart sections----- */}
        <div>
          <Cart cartData={cartData} time ={readingTime}> </Cart>
        </div>

      </div>

    {/* -----Questions Blog and Answers----- */}
     <div id="questions" className="my-10 py-10">
     <h2  className="font-bold text-3xl mb-10">Common Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="">
        <Blog> </Blog>
        </div>

        <div className="hidden md:block">
          <img src={questionImg} alt="" />
        </div>

      </div>
     </div>
      
    </main>
     
     {/* -----Footer----- */}
     <Footer> </Footer>
    </div>
  );
}

export default App;

