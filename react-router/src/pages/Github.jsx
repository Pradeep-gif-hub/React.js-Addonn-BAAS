import { useEffect, useState } from "react";
import "./Pages.css";

const Github = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/pradeep-gif-hub")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data)
    return (
      <div className="page-container">
        <div className="card"><h3>Loading GitHub Profile...</h3></div>
      </div>
    );

  return (
    <div className="page-container">
      <div className="card">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginBottom: "15px",
          }}
        />
        <h1>{data.name  || data.login}</h1>
        <p>Followers: <b>{data.followers}</b></p>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "8px 20px",
            borderRadius: "20px",
            background: "#0072ff",
            color: "white",
            textDecoration: "none",
            transition: "0.3s",
          }}
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Github;

  // import { useLoaderData } from "react-router-dom";

  // export default function Github() {
  //   const user = useLoaderData(); // receives data from githubLoader

  //   return (
  //     <div className="card">
  //       <img src={user.avatar_url} alt="Avatar" className="avatar" />
  //       <h2>{user.name}</h2>
  //       <p>{user.bio}</p>
  //       <button
  //         onClick={() => window.open(user.html_url, "_blank")}
  //         className="btn-primary"
  //       >
  //         Visit GitHub
  //       </button>
  //     </div>
  //   );
  // }

