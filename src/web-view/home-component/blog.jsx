// AboutSection.jsx
import Header from "../../share-view/header";
import Footer from "../../share-view/footer";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [news, setNews] = useState([]);
  const fetchData = async () => {
    try {
      const newsResponse = await axios.get("http://localhost:3002/news");
      setNews(newsResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const searchNews = (event) => {
    // Xử lý logic tìm kiếm ở đây
    var newsName = event.target.value;
    if (newsName != '' && newsName) {
      var data = news.filter(
        x => x.title.toString().toLowerCase().includes(newsName) || x.topic.toString().toLowerCase().includes(newsName)
      );
      setNews(data);
    } else {
      fetchData();
    }
  };

  return (
    <div>
        
      <Header />
      <div className="container">
      <div
        className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block"
        style={{
          float: "none",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
          width: "100%",
          padding: "20px",
          border: "1px solid #ddd",
          marginTop:"70px"
        }}
      >
        <div className="search-bar border rounded-2 px-3 border-dark-subtle">
          <form
            id="search-form"
            className="text-center d-flex align-items-center"
            action=""
            method=""
          >
            <input
              onInput={searchNews}
              type="text"
              className="form-control border-0 bg-transparent"
              placeholder="Tìm kiếm tin tức!"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
              ></path>
            </svg>
          </form>
        </div>
      </div>
      <div className="col-12 product-list">
        <div className="row">
          {news.map((news, index) => (
            <div key={index} className="product-item col-3">
              <div className="img-product">
                <img src={news.newsImage} alt={news.title} />
              </div>
              <div className="content-product">
                <h5>
                  <a href={`/blogdetail/${news.id}`} className="product-link">
                    {news.title}
                  </a>
                </h5>
                <p>Chủ đề: {news.topic}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
