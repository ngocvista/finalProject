import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../share-view/header";
import Footer from "../../share-view/footer";

const BlogDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/news/${id}`);
      setNews(response.data || []);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchNews();
    console.log(news);
  }, [id]);

  return (
    <div>
      <Header />
      <div className="properties section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div
                className="section-heading text-center"
                style={{ marginTop: "30px" }}
              >
                <h2>Tin Tức Mới Nhất</h2>
                <br />
              </div>
            </div>
          </div>
          {news && (
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="item text-center">
                  <a href="#">
                    <img src={news.newsImage} alt={news.Title} />
                  </a>
                  <span className="category ">Thể loại: {news.topic}</span>
                </div>
              </div>

              <div className="col-lg-4">
                <h5>{news.title}</h5>
                <span className="post-meta-author"><i className="fa fa-user"></i><a href="#" title="">  Ngọc Vũ</a></span><br/><br/>
                <p>Mô Tả: {news.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
