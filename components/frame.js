import React from 'react'
import Link from 'next/link'
import {
  CloudinaryContext,
  Transformation,
  Image
} from 'cloudinary-react'



export default ({ id }) => (
<div className="container">
  <div className='photo'>
      <CloudinaryContext cloudName="dj6ppswvb">
        <Image publicId={id} className="img">
          <Transformation
            width='300'
            crop="scale"
          />
        </Image>
      </CloudinaryContext>
  </div>
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
        overflow: hidden;
        display: inline-block;
      }
      .img {
        height: 500px;
      }
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        position: relative;
        z-index: 10;
      }
      .sidebar {
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
