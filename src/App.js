import "./app.css";
import { useSelector, useDispatch } from "react-redux";
/*useSelectorはreduxのstateを取得するためのhookです*/
import {addPost} from "./features/Post";
function App() {
  const postlist = useSelector((state) => state.posts.value);

  const dispatch = useDispatch();
  
  const handleClick = () => {
dispatch(addPost(
  {
    id:0,
    name:
  content:
  }
))
  };

  return <div className="App">
    <div>
      <h1>React-Redux掲示板</h1>
    </div>
    <div className="addPost">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Content" />
      <button onClick={() => handleClick()}>Add</button>
      <hr />
    </div>
    <div className="displayPosts">
      {postlist.map((post) => (
         <div key={post.id} className="post">
          <h1 className="postName">{post.name}</h1>
          <h1 className="postContent">{post.content}</h1>
          <button>delete</button>
         </div>
      ))}
     
      </div>
  </div>;
}

export default App;
