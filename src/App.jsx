import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";

function App() {
  const [allData, setAllData] = useState([]);
  useEffect( ( ) => {
    fetch('data.json')
    .then ( res => res.json())
    .then ( data => setAllData(data))
  }, [ ])

  console.log(allData);
  return (
    <div className="">
     {/*---- header ---- */}
     <header>
       {/* --Navbar-- */}
     <Navbar> </Navbar>
     </header>

    {/*---- Main ---- */}
    <main>
      <div className="grid grid-cols-1 my-8  md:grid-cols-3 gap-5">
        <div className=" md:col-span-2">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae deserunt sunt architecto consequatur dolores reprehenderit voluptatibus, ea itaque voluptatem a perspiciatis iste quos fugiat delectus nostrum praesentium ducimus quasi cum dolorum, assumenda, sapiente totam incidunt? Animi, unde molestias id saepe est enim eius excepturi veniam reprehenderit atque suscipit hic expedita corrupti porro esse nobis illo nulla totam facere voluptate. Iusto autem, totam quisquam placeat assumenda ipsum neque? Nisi, similique dolores! Asperiores officiis quis repudiandae reprehenderit dolores architecto accusamus esse iste, similique labore ad ratione porro error laborum et ea delectus. Quo assumenda rem nemo quidem deleniti distinctio error nihil aliquam voluptatum obcaecati, sapiente tempora debitis ipsam exercitationem, esse quos sed vero minus fugiat eum est unde. Corrupti nobis voluptas laudantium possimus reprehenderit illum, explicabo praesentium itaque enim dolore ipsa, nihil cumque ullam. Cumque officia architecto magnam sapiente nulla dolor voluptatibus pariatur dicta libero vel blanditiis corporis minus nihil harum distinctio laudantium eum, nostrum enim dignissimos id! Delectus ipsam vel consequatur dolor, ut pariatur voluptate? Dicta labore illum eligendi eos dolorum explicabo quos temporibus adipisci magnam quisquam aliquid itaque dignissimos, ea atque reprehenderit non! Accusantium esse pariatur amet nam nesciunt iusto, eveniet suscipit tempora sequi temporibus iure. Harum qui, blanditiis asperiores aperiam voluptas magni magnam! Inventore ea adipisci veritatis praesentium esse nihil eaque debitis, neque, molestias natus voluptatum explicabo aut nisi? Aliquam, praesentium atque at impedit quidem molestias vero? Repellendus tempore voluptatem tempora amet. Explicabo nemo odio omnis molestiae et quaerat minus dolorum! Doloremque, quisquam, fugit debitis ducimus accusamus autem aut, voluptas tempora aliquid aliquam incidunt blanditiis. Numquam deleniti eligendi sed, ut architecto magnam enim accusantium in nam at maxime atque? Velit illo perspiciatis soluta facilis illum quam voluptatem numquam sint dolore mollitia neque enim omnis quia alias, inventore minus obcaecati nisi! Ab ullam aliquam doloremque? Non, assumenda? Ipsum magni vero totam at dolorem repellat adipisci quidem asperiores. Fugiat ex aperiam ipsa delectus esse ipsum facilis vero aliquid dolor nesciunt mollitia velit sit vitae, amet a reiciendis asperiores voluptates eum possimus quos odio error ea? Rerum quod reiciendis quos expedita libero similique aliquam quibusdam commodi iure, accusamus dolorum culpa quaerat inventore animi temporibus id minus voluptates ipsa, autem doloribus nemo ipsam, aspernatur numquam repellat! Quaerat et veritatis unde sint nostrum atque ipsum commodi impedit omnis odio hic, ex inventore quam molestias deleniti dolor temporibus culpa natus eum magnam repellat. Alias illum voluptatibus culpa repudiandae eius repellat dolorem tenetur ullam accusamus consectetur?</p>
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
