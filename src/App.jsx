import { useState, useEffect} from 'react'

// API

import { fetchArticlesWithTopic } from "./components/Gallery/GalleryApi";

// STYLE
import toast, { Toaster } from 'react-hot-toast';

import './App.css'

// DATA JSON

import FAVORITE_DATA from './components/Favorite/DATA.json'

// COMPONENTS

import Header from './components/Header/Header';
import ArticleList from './components/Gallery/Gallery';
import Loader from './components/Loader/Loader';
// import Error from './components/Error/Error';
import ModalPage from './components/Gallery/Modal';


// RENDER FUNCTION

function App() {

  // useState

  const [images, setImages] = useState([]); // Стан для зберігання списку зображень
  const [articles, setArticles] = useState([]); // Стан для зберігання масиву даних 
  const [loading, setLoading] = useState(true); // Стан для зберігання прелоудера підгрузки апі
  const [error, setError] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false); // Стан для відображення/приховування модального вікна
  const [selectedImage, setSelectedImage] = useState(null); // Стан для зберігання вибраного зображення для модального вікна

  const [like, setLike] = useState(FAVORITE_DATA);
  const [openPage, setOpenPage] = useState(false);

// useEffect 

  useEffect(() => {
    async function fetchArticles() {

      try {
        const data = await fetchArticlesWithTopic("random");

        setLoading(false);
        setImages([]);
        setArticles(data.results);
        setImages(data.results);

      } catch(error) {
        toast.error("This didn't work.")
        setError(true);

      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  
// MODAL FULL IMAGE BAR

  const handleSearch = async (SEARCH_VALUE) => {

    if(SEARCH_VALUE === '') {
      toast.error("The search field cannot be empty!");
        return;
    }
     
    try {

      setArticles([]);
      setError(false);
      setLoading(true);
      
      const data = await fetchArticlesWithTopic(SEARCH_VALUE);
      
      if (!data.total) {
        toast(
          "Sorry, we have not found the photos for your request. Try to write it differently.",
          {
            duration: 5000,
          }
        );
        return;
      }

      setArticles(data.results);
      toast.success(`Wow! We found ${data.total} pictures`); 

    } catch (error) {
      toast.error("This didn't work.")
      setError(true);
    } 

    finally {
      setLoading(false);
    }
  }

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
    console.log(modalIsOpen);
  }
  
  const closeModal = () => {
    setModalIsOpen(false);
    console.log(modalIsOpen);
  }

  // LIKE PAGE

  const  isLiked = (newLike) => {
      setLike((prevList) => {
        return [...prevList, newLike];
      });
  }

  const onDelete = (itemId) => {
    const updatedItems = like.filter(item => item.id !== itemId.id);
    setLike(updatedItems);
  }

  const openPageHandle = () => {
    setOpenPage(true);
  }

  const closePageHandle = () => {
    setOpenPage(false);
  }
  
  

  return (
    <>      
    {loading && <Loader/>}
    <Toaster position="top-left" reverseOrder={false} />

    <Header favorites={like} current={openPage} closeCurrent={closePageHandle} openPage={openPageHandle} handleSearch={handleSearch} ></Header>

    <main>
    <ArticleList items={articles} setOpen={openModal} setModal={setModalIsOpen} liked={isLiked} onDelete={onDelete}> </ArticleList>
    </main>

    <ModalPage setOpen={openModal} setClose={closeModal}  isOpen={modalIsOpen} image={selectedImage} like={isLiked} setDelete={onDelete}></ModalPage>


    </>
  )
}

export default App