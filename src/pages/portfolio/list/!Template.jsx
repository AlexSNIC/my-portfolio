import React from 'react'

import TextAndImage from '../../../components/format-content/TextAndImage';
import ImageAndText from '../../../components/format-content/ImageAndText';
import ProjectHeader from '../ProjectHeader';
import data from '../projects_data.js';

function Template() {
  return (
    <section className='project'>
      <ProjectHeader title="Project Title" finished="Month Year" lastUpdated="Month Year" />
      <TextAndImage 
      text={`
        
      `}
      image={""}
      />
      <ImageAndText 
      text={`
        
      `}
      image={""}
      />
    </section>
  )
}

export default Template