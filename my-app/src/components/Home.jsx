import React, { useState } from "react";

function Home() {
  return (

    <div className="row">
      <h1 className=" bg-primary text-center" style={{ backgroundColor: "blueviolet" }}>WELCOME TO MOBILES MELA!!</h1>

      <div class="card col-4" style={{ width: '18rem;' }}>
        <img src="https://www.adomonline.com/wp-content/uploads/2021/10/unnamed-1-Copy.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Iphone</h5>
          <p class="card-text">The iPhone 15 Pro and iPhone 15 Pro Max are Apple's current high-end flagship iPhones, sold alongside the iPhone 15 and iPhone 15 Plus.Pleasant and vivid color in both photo and video, accurate skin tones
Wide dynamic range in both photo and video, excellent contrast
High level of detail both in photo and video Excellent autofocus both for photo and video
Pleasant simulated bokeh effect with very good details on faces.</p>
          <a href="Cart" class="btn btn-primary">GO</a>
        </div>
      </div>
      <div className="col-4">


        <div class="card" style={{ width: '18rem;' }}>
          <img src="https://www.cellularsales.com/wp-content/uploads/2024/01/samsung-galaxy-s23-ultra-titaniumblack.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Galaxy s24 Series</h5>
            <p class="card-text">The Samsung Galaxy S24 combines a fast processor, a bright display, sharp cameras, and helpful AI tools in a pocket-friendly size for a reasonable price.the mobile is the most peoples rating so the are highprice system these are the most powerfull currently mode and superlative.</p>
            <a href="Cart" class="btn btn-primary">GO</a>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div class="card" style={{ width: '18rem;' }}>
          <img src="https://cf.shopee.com.my/file/my-11134207-23010-oroeqeueo4lv0b" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">OPPO</h5>
            <p class="card-text">oppo has emerged as a prominent player in the Indian smartphone market, offering a diverse range of devices that cater to various needs and preferences. When it comes to finding the best oppo phone in India Most countries buy very powerfull battery and good charger  .</p>
            <a href="Cart" class="btn btn-primary">GO</a>

          </div>
        </div>
        <footer></footer>
      </div>
    </div>


  )
}
export default Home