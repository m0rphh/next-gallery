import React from 'react'
import Photo from './frame'
import Router from 'next/router'
import {
  CloudinaryContext,
  Transformation,
  Image
} from 'cloudinary-react';
import { Facebook } from 'react-social-sharing'

export default class extends React.Component {
  dismiss (e) {
    if (this._shim === e.target ||
       this._photoWrap === e.target) {
      if (this.props.onDismiss) {
        this.props.onDismiss()
      }
    }
  }
  goBack(e) {
    e.preventDefault();
    Router.back(e)
  }

  render () {

    // console.log('localhost:3000' + Router.asPath)
    return (
      <div ref={el => (this._shim = el)} className='shim' onClick={(e) => this.dismiss(e)}>
        <a onClick={(e) => this.goBack(e)}>Back</a>
        <div ref={el => (this._photoWrap = el)} className='photo'>
          {/* <Photo url={this.props.id} /> */}
          <CloudinaryContext cloudName="dj6ppswvb">
            <Image publicId={this.props.id}>
              <Transformation
                width='300'
                crop="scale"
              />
            </Image>
          </CloudinaryContext>
          <Facebook style={styles} link={'localhost:3000' + Router.asPath} />
        </div>
        <style jsx>{`
          .shim {
            position: fixed;
            background: rgba(0,0,0,.65);
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
          }

          .photo {
            position: absolute;
            top: 50%;
            width: 100%;
            margin-top: -250px;
          }
        `}</style>
      </div>
    )
  }
}
const styles = {
  background: 'transparent'
};