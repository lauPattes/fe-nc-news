import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://laura-news.onrender.com/api/topics").then(({ data }) => {
      const { topics } = data;
      setTopics(topics);
      setIsLoading(false);
      console.log(topics);
    });
  }, []);

  return (
    <section className="topicsPage">
      <header>
        <h1 className="TopicsHeader">Available Topics</h1>
        <nav className="menuLink">
          <Link to="/" className="homeLink">Home</Link>
          <Link to="/log_in" className="LogInLink">Log In</Link>
        </nav>
      </header>
      <main>
        {isLoading ? (
          <p className="Loading">
            <b>LOADING....</b>
          </p>
        ) : null}
        <ul className="topicsList">
          {topics.map((topic) => {
            return (
              <Link to={`/articles/topics/${topic.slug}`} key={topic.slug}>
                <h2 className="topicName">{topic.slug}</h2>
                <p className="topicDescription">{topic.description}</p>
              </Link>
            );
          })}
        </ul>
      </main>
    </section>
  );
}
