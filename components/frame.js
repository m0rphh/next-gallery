import React from 'react'
import Link from 'next/link'
import {
  CloudinaryContext,
  Transformation,
  Image
} from 'cloudinary-react'



export default ({ id }) => (

  <div className='photo'>
      <CloudinaryContext cloudName="dj6ppswvb">
        <Image publicId={id}>
          <Transformation
            width='300'
            crop="scale"
          />
        </Image>
      </CloudinaryContext>

    <div className='sidebar'>
      <ul className='sidebarList'>
        <li>
          <Link><a href='/profile?id=nkzawa'>@nkzawa</a></Link>
          - Great photo!
        </li>
      </ul>
    </div>

    <style jsx>{`
      .photo {
        width: 800px;
        overflow: hidden;
        height: 500px;
        display: inline-block;
      }
      .sidebar {
        float: right;
        background: #fff;
        width: 200px;
        height: 500px;
        text-align: left;
        box-sizing: border-box;
        padding: 20px;
        font-family: Monaco;
        font-size: 11px;
      }
      .sidebarList {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)
