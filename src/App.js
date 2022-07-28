import "./app.css";
import { useSelector } from "react-redux";
/*useSelectorはreduxのstateを取得するためのhookです*/

function App() {
  const postlist = useSelector((state) => state.posts.value);

  return <div className="App">
    <div>
      <h1>React-Redux掲示板</h1>
    </div>
    <div className="addPost">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Content" />
      <button>Add</button>
      <hr />
    </div>
    <div className="displayPosts">
      {postlist.map((post) => (
         <div>
          <h1>{post.name}</h1>
         </div>
      ))}
     
      </div>
  </div>;
}

export default App;
