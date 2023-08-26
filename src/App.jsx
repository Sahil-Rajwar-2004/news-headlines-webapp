import {useState,useEffect} from "react";
import axios from "axios";
import src from "./assets/leonardo-dicaprio.gif";

function NewsApp(){
  const [articles, setArticles] = useState([]);

  async function getNews(apiKey,genre){
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${genre}&apiKey=${apiKey}`);
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error: ', error.message);
    }
  }

  const apiKey = 'd8dc9f8f50f04fbba096b3b7f05a6212';
  const defaultGenre = 'space';

  useEffect(() => {
    getNews(apiKey,defaultGenre);
  }, []);

  return ( 
    <div>
      <h3><span>Nirmata</span>: <a href="https://x.com/justSahilRajwar" target='blank_'>Sahil-Rajwar</a></h3>
      <h3><span>Src-Code</span>: <a href="https://github.com/Sahil-Rajwar-2004/NEWS-APP-REACT" target="blank_">GitHub</a></h3>
      <h1>News App</h1>
      <select onChange={(e) => getNews(apiKey,e.target.value)}>
        <option value="space">Space</option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
      </select>
      <ul>
        {articles.map((article,index) => (
          <div className="article-div" key={index}>
            <h2><span>{index+1}</span>. {article.title}</h2>
            <p className='links'><span>Source</span>: <a href={article.url} target="_blank" rel="noopener noreferrer">{article.source.name}</a></p>
            <p><span>Published At</span>: {article.publishedAt}</p>
          </div>
        ))}
      </ul>
      <div className='ending'>
        <h1 className='ending-text'>That's All For Today</h1>
        <img src={src}/>
        <h3>We appreciate your patience</h3>
      </div>
    </div>
  );
}

export default NewsApp;
