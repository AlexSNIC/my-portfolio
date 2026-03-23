import React from 'react'

import TextAndImage from '../../../components/format-content/TextAndImage';
import ImageAndText from '../../../components/format-content/ImageAndText';
import ProjectHeader from '../ProjectHeader';
import TileMapGeneratorIMG from '../../../assets/portfolio/tile_map_generator/interface.png';

function TileMapGenerator() {
  return (
    <section className='project'>
      <ProjectHeader title="Tile Map Generator" finished="19 June 2023" lastUpdated="19 June 2023" />
      <TextAndImage 
      text={<>
        A simple tile map generator built with basic JavaScript for quick generation of numerical matrices.
        To generate a map, draw the desired layout on a grid, click build and copy the generated matrix.
        The generator is equiped with 3 tools: pen, fill and eraser. You can cusomize the size of the grid.
        Press 1, 2, or 3 to switch between tools. Press W or S to increase or decrease the value of pen/fill tool.
        New values are automatically assigned a random color. 
        <br />
        <a className='u-underline' target='_blank' href='https://github.com/AlexSNIC/tile-map-generator'>Source Code</a> | <a className='u-underline' target='_blank' href='https://alexsnic.github.io/tile-map-generator/'>Website</a>
      </>}
      image={TileMapGeneratorIMG}
      />
    </section>
  )
}

export default TileMapGenerator