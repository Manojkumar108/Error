import React from 'react'

export const Home = () => {
  return (
    <>
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>Donation</p>
            <h1>Wecome to Therads Of Hope</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, veritatis modi. Nulla perferendis consectetur exercitationem quibusdam beatae consequuntur vitae, consequatur libero eum odio numquam fugiat nisi dignissimos natus corrupti impedit fugit laudantium recusandae optio aliquid!</p>
            <div className="btn btn-group">
              <a href="/contact"><button className="btn">connect Now</button></a>
              <a href="/donation"><button className="btn secondary-btn">Donate</button></a>
            </div>
          </div>
          {/* img section/ */}
          <div className="hero-image">
            <img src="/images/img1.jpg" alt="" width='400' height='400' />
          </div>


        </div>

      </section>
    </main>
    </>
  )
}
