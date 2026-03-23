import React from 'react'

import TextAndImage from '../../../components/format-content/TextAndImage';
import ImageAndText from '../../../components/format-content/ImageAndText';
import ProjectHeader from '../ProjectHeader';
import data from '../projects_data.js';
import ImageTextImage from '../../../components/format-content/ImageTextImage.jsx';

import HOME_IMG1 from "../../../assets/portfolio/bellatrix_bizantin_art/home.png"
import HOME_IMG2 from "../../../assets/portfolio/bellatrix_bizantin_art/home2.png"
import PRODUCTS_IMG1 from "../../../assets/portfolio/bellatrix_bizantin_art/product.png"
import PRODUCTS_IMG2 from "../../../assets/portfolio/bellatrix_bizantin_art/products_recents.png"
import PRODUCTS_IMG3 from "../../../assets/portfolio/bellatrix_bizantin_art/products_search.png"

function BellatrixBizantinArt() {
  return (
    <section className='project'>
      <ProjectHeader title={data.bellatrixbizantinart.title} finished={data.bellatrixbizantinart.finished} lastUpdated={data.bellatrixbizantinart.lastUpdated} />
      <TextAndImage 
      text={`
        This is a project I chose to do for a person who had a business but no website. I made it for the TJA2025 competition.
        Out of all my projects until that point, this was the most complex one and the one I put the most effort into.
        I was tasked with the person in charge to make a website for her art business, implementing a way for customers to request a service online.
        Besides that, as a bonus for the competition, I also implemented a way for the business to manage the orders and added a shopping page, where the business could post their projects for sale.
      `}
      image={HOME_IMG1}
      />
      <ImageAndText 
      text={`
        For the frontend, I sadly couldn't use React, as the competition rules stated that frameworks are not allowed. Instead, I used simple HTML and JS.
        The website has 5 main pages: Home, Products, Services, About and Contacts.
        On the Home page I used the AOS (Animate On Scroll) library and some custom animations to make the website more dynamic and visually appealing.
      `}
      image={HOME_IMG2}
      />
      <ImageTextImage text={`  
        In the Products page you can see all the products available to the public.
        At the top I implemented a slider with the recently viewed products.  
      `} 
      image1={PRODUCTS_IMG1}
      image2={PRODUCTS_IMG2}
      />
      <TextAndImage 
        text={`
          If you scroll down, you will see cards for all available products. Each card has functional "add to wishlist", "add to cart" and "view product page" buttons.
          The product page has all necessary buttons, a description of the product and a full view of the product. You can zoom in on the product by hovering over the image on the right.
        `}
        image={PRODUCTS_IMG3}
      />
    </section>
  )
}

export default BellatrixBizantinArt