import { useState, useEffect } from "react";

// API

import { fetchArticlesWithTopic } from "./components/Gallery/GalleryApi";

// STYLE

import toast, { Toaster } from "react-hot-toast";

import "./App.css";

// DATA JSON

import FAVORITE_DATA from "./components/Favorite/DATA.json";

// COMPONENTS

import Header from "./components/Header/Header";
import ArticleList from "./components/Gallery/Gallery";
import Loader from "./components/Loader/Loader";
// import Error from './components/Error/Error';

import ModalPage from "./components/Gallery/Modal";
import FavoriteModal from "./components/Favorite/FavoriteModal";

import LoadMore from "./components/LoadMoreBtn/LoadMoreBtn";

// RENDER FUNCTION

function App() {
  // useState

  const [images, setImages] = useState([]); // Стан для зберігання списку зображень

  // API

  const [page, setPage] = useState(1); // Стан для зберігання поточної сторінки результатів
  const [totalPage, setTotalPage] = useState(0); // Стан для зберігання поточної сторінки результатів
  const [search, setSearch] = useState(""); // Стан для зберігання поточного пошукового запиту

  // Loading && Error

  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false); // Стан для зберігання прелоудера підгрузки апі
  const [error, setError] = useState(false);

  const [loadingMore, setLoadingMore] = useState(false); // Стан для відображення завантаження додаткового контенту

  // Favorite array

  const [like, setLike] = useState(FAVORITE_DATA);

  const [activeButton, setActiveButton] = useState(false);

  // Image info modal page

  const [openPage, setOpenPage] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Стан для відображення/приховування модального вікна
  const [selectedImage, setSelectedImage] = useState(null); // Стан для зберігання вибраного зображення для модального вікна
  const [articles, setArticles] = useState([]); // Стан для зберігання масиву даних

  // Favorite info modal page

  const [modalIsOpenF, setModalIsOpenF] = useState(false); // Стан для відображення/приховування модального вікна
  const [modalIsOpenFav, setModalIsOpenFav] = useState(false); // Стан для відображення/приховування модального вікна
  const [selectedImageF, setSelectedImageF] = useState({}); // Стан для зберігання вибраного зображення для модального вікна
  const [openPageF, setOpenPageF] = useState(false);

  // useEffect

  useEffect(() => {
    async function fetchArticles() {
      try {
        setIsLoading(true);
        const data = await fetchArticlesWithTopic("FrontEnd", 1);
        setLoading(true);
        setLoadingMore(false);
        setPage(1);
        setArticles(data.results);
        setImages(data.results);
      } catch (error) {
        toast.error("This didn't work.");
        setError(true);
      } finally {
        setIsLoading(false);
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  // MODAL FULL IMAGE BAR

  const handleSearch = async (SEARCH_VALUE) => {
    if (SEARCH_VALUE === "") {
      toast.error("The search field cannot be empty!");
      return;
    }

    try {
      page === totalPage ? setLoadingMore(false) : setLoadingMore(true);
      setIsLoading(true);
      setArticles([]);
      setSearch(SEARCH_VALUE);
      setPage(1);

      setError(false);
      setLoading(true);

      const data = await fetchArticlesWithTopic(SEARCH_VALUE, 1);
      setArticles(data.results);
      setTotalPage(data.total_pages);

      if (!data.total) {
        toast(
          "Sorry, we have not found the photos for your request. Try to write it differently.",
          { duration: 5000 }
        );
        return;
      }

      toast.success(`Wow! We found ${data.total} pictures`);
    } catch (error) {
      toast.error("This didn't work.");
      setError(true);
    } finally {
      page === totalPage ? setLoadingMore(false) : setLoadingMore(true);
      setIsLoading(false);
      setLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      setIsLoading(true);
      setLoading(true);
      const nextLoad = page + 1;
      page === totalPage ? setLoadingMore(false) : setLoadingMore(true);
      const data = await fetchArticlesWithTopic(search, nextLoad);
      setArticles((prevImages) => {
        return [...prevImages, ...data.results];
      });
      setPage(nextLoad);
    } catch (error) {
      toast.error("This didn't work.");
      setLoadingMore(false);
      setError(true);
    } finally {
      page === totalPage ? setLoadingMore(false) : setLoadingMore(true);
      setIsLoading(false);
      setLoading(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModalFavorite = (item) => {
    setSelectedImageF(item);
    setModalIsOpenF(true);
  };

  const closeModalF = () => {
    setModalIsOpenF(false);
  };

  // LIKE PAGE

  const isLiked = (newLike) => {
    setLike((prevList) => {
      return [...prevList, newLike];
    });
  };

  const onDelete = (itemId) => {
    const updatedItems = like.filter((item) => item.id !== itemId.id);
    setLike(updatedItems);
  };

  const onDeleteFromFav = (itemId) => {
    const updatedItems = like.filter((item) => item.id !== itemId.id);
    setLike(updatedItems);
  };

  const openPageHandle = () => {
    setOpenPage(true);
  };

  const closePageHandle = () => {
    setOpenPage(false);
  };

  const openFullScreen = (imgItem, imageTile) => {
    if (imgItem) {
      const INDEX_ITEM = imgItem.dataset.id;
      const FIND_ID = articles.find((image) => image.id === INDEX_ITEM);

      if (FIND_ID) {
        setModalIsOpen(true);
        openModal(FIND_ID);
      }
    }
  };

  const openFullScreenFavorite = (imgItem, imageTile) => {
    if (imgItem) {
      const INDEX_ITEM = imgItem.dataset.id;
      const FIND_ID = like.find((image) => image.id === INDEX_ITEM);

      if (FIND_ID) {
        setModalIsOpenFav(true);
        openModalFavorite(FIND_ID);
      }
    }
  };

  const changeActiveButton = (active) => {
    setActiveButton(active);
  };

  return (
    <>
      {loading && <Loader />}

      <Toaster position="top-left" reverseOrder={false} />

      <Header
        favorites={like}
        setFavorites={setLike}
        current={openPage}
        closeCurrent={closePageHandle}
        openPage={openPageHandle}
        handleSearch={handleSearch}
        fullScreenFavorites={openFullScreenFavorite}
        OnDelete={onDeleteFromFav}
        activeButtons={changeActiveButton}
      ></Header>

      <main>
        <ArticleList
          loading={isLoading}
          items={articles}
          setOpen={openModal}
          setModal={setModalIsOpen}
          liked={isLiked}
          onDelete={onDelete}
          fullScreen={openFullScreen}
          active={activeButton}
          activeButtons={changeActiveButton}
          favorites={like}
        ></ArticleList>

        {loadingMore && <LoadMore loadMore={loadMore} />}
      </main>

      <ModalPage
        setOpen={openModal}
        setClose={closeModal}
        isOpen={modalIsOpen}
        image={selectedImage}
        like={isLiked}
        setDelete={onDelete}
      ></ModalPage>

      <FavoriteModal
        setOpen={openModalFavorite}
        isOpen={modalIsOpenF}
        setClose={closeModalF}
        dataFavorite={like}
        image={selectedImageF}
      ></FavoriteModal>
    </>
  );
}

export default App;
