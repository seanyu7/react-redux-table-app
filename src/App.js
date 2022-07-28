import "./app.css";
import { useSelector, useDispatch } from "react-redux";
/*useSelectorはreduxのstateを取得するためのhookです*/
import { addPost, deletePost } from "./features/Post";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const postlist = useSelector((state) => state.posts.value);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addPost({
        id: postlist.length,
        name: name,
        content: content,
      })
    );
    setContent("");
    setName("");
  };

  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
      </div>
      <div className="addPost">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={() => handleClick()}>Add</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postlist.map((post) => (
          <div key={post.id} className="post">
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button onClick={()=> dispatch(deletePost({id:post.id}))}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
