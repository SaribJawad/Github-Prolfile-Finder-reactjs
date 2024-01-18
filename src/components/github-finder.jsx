import { useEffect, useState } from "react";
import User from "./user";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("SaribJawad");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    const resp = await fetch(`https://api.github.com/users/${userName}`);
    const data = await resp.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
      console.log(data);
    }
  }

  function handleSubmit() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading data! Kindle wait</h1>;
  }

  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          name="search"
          type="text"
          placeholder="Type username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
