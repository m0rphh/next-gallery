import React from 'react'
import Link from 'next/link'
import {
  CloudinaryContext,
  Transformation,
  Image
} from 'cloudinary-react'
import Overdrive from 'react-overdrive'


export default ({ id }) => (
  <CloudinaryContext cloudName="dj6ppswvb">
    <Overdrive id={id.toString()} animationDelay={1} duration={500} style={{ display: 'inline-block' }}>
      <div className='photo'>
        <Image publicId={id} className="img">
          <Transformation
            width='800'
            crop="scale"
          />
        </Image>
      </div>
    </Overdrive>
    <Overdrive id={id.toString()} animationDelay={2} duration={500} style={{ display: 'inline-block' }}>
    <div className='sidebar'>
      <ul className='sidebarList'>
        <li>
          {/* <Link><a href='/profile?id=nkzawa'>@nkzawa</a></Link>
          - Great photo! */}
        </li>
      </ul>
    </div>
    </Overdrive>

    <style jsx>{`
      .photo {

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
        margin-right: 0;
      }
      .sidebarList {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </CloudinaryContext >
)
