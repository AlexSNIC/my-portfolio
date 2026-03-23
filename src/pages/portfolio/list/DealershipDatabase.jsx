import React from 'react'

import TextAndImage from '../../../components/format-content/TextAndImage';
import ImageAndText from '../../../components/format-content/ImageAndText';
import ProjectHeader from '../ProjectHeader';

import databaseIMG from "../../../assets/portfolio/dealership_database/dealership.png"
import data from "../projects_data.js";
import { Link } from 'react-router-dom';

function DealershipDatabase() {
  return (
    <section className='project'>
      <ProjectHeader title={data.dealershipdatabase.title} finished={data.dealershipdatabase.finished} lastUpdated={data.dealershipdatabase.lastUpdated} />
      <TextAndImage 
      text={<>
        This project is a car dealership database management system built using React as the frontend and Firebase as the backend. You can add new cars, create documents, insert a variety of fields, and view all the cars in the database.
        It's still a work in progress.
        <br />
        <a className='u-underline' href={data.dealershipdatabase.src} target="_blank">
          View Source Code
        </a>
      </>}
      image={databaseIMG}
      />
    </section>
  )
}

export default DealershipDatabase