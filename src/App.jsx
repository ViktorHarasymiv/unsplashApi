import { useState, useEffect , useRef} from 'react'

import { fetchArticlesWithTopic } from "./components/Article/articles-api";

import { useToggle } from "./Hooks/useToggle";

import './App.css'

import Search from './components/Search/Search';
import ArticleList from './components/Article/ArticleList';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';

import { useUser } from "./UserContext";

import { UserMenu } from './components/SignIn/UserMenu';

function App() {

   const {  username } = useUser();

  // Private hooks

  const { isOpen, open, close } = useToggle();

  // useState

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect 

  useEffect(() => {
    async function fetchArticles() {

      try {
        setLoading(true);

      } catch(error) {
        setError(true);

      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const handleSearch = async (topic) => {

    try {

      setArticles([]);
      
      setError(false);

      setLoading(true);

      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);

    } catch (error) {

      setError(true);

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
    <UserMenu />

    { !username &&
      <h1>To search for images, you must specify a registration name.</h1>
    }

    {!username == '' &&
      <Search onSearch={handleSearch}></Search>
    }

    {loading && <Loader> </Loader>}

    {error && (<Error></Error>)}

    {articles.length > 0 && !username == '' ? 
    <ArticleList items={articles} > </ArticleList>
    : false
  }
  
  </>
  )
}

export default App