import "./App.css";

function App() {
  const data = [
    {id: 789456123, blogCover: 'https://shorturl.at/dpES2', title:'How to get your first job as a self-taught programmer', authorName:'Mr. Raju', writtingDate:'Mar 14, 2023', authorImage:''  },
    
  ];
  return (
    <div className="">
      <button className="btn btn-active">Button</button>
      <button className="btn btn-active btn-primary">Button</button>
      <button className="btn btn-active btn-secondary">Button</button>
      <button className="btn btn-active btn-accent">Button</button>
      <button className="btn btn-active btn-ghost">Button</button>
      <button className="btn btn-active btn-link">Button</button>
    </div>
  );
}

export default App;
