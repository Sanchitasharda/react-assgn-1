import React from "react";
import "./news.css";

const Blog = () => {
  return (
    <div style={{ width: "100%", height: "50rem" }}>
      <div>
        <marquee>BREAKING NEWSSSS!!!</marquee>
        <section class="main">
          <div class="card">
            <div class="card-pic"></div>
            <div class="card-title">LATEST NEWS IS HERE...</div>
            <div class="card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              officia tempora architecto recusandae. Obcaecati, at accusamus?
              Consequuntur, magnam accusamus accusantium eius fugiat blanditiis
              at!
            </div>
          </div>
          {/* <!-- <div class="card">
        <div class="card-pic"></div>
        <div class="card-title">news: real af</div>
        <div class="card-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia
          tempora architecto recusandae. Obcaecati, at accusamus? Consequuntur,
          magnam accusamus accusantium eius fugiat blanditiis at!
        </div>
      </div> --> */}
          {/* <!-- <div class="card">
        <div class="card-pic"></div>
        <div class="card-title">news: real af</div>
        <div class="card-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia
          tempora architecto recusandae. Obcaecati, at accusamus? Consequuntur,
          magnam accusamus accusantium eius fugiat blanditiis at!
        </div>
      </div> --> */}
        </section>
      </div>
    </div>
  );
};
export default Blog;
