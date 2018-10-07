import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Modal from '../components/modal'
import Layout from '../components/layout'



export default class extends React.Component {
  static getInitialProps () {
    return {
      photos: new Array(15).fill(0).map((v, k) => k + 1)
    }
  }


  render () {
    const { url, photos } = this.props

    return (
      <Layout>
      <div className='mainHolder'>
        {
          url.query.photoId &&
            <Modal
              id={url.query.photoId}
              onDismiss={() => this.dismissModal()}
            />
        }
        {
          photos.map((id) => (
            <div key={id} className='photo'>
              <a
                className='photoLink'
                href={`/photo?id=${id}`}
                onClick={(e) => this.showPhoto(e, id)}
              >
                {id}
              </a>
            </div>
          ))
        }
        <style jsx>{`

          .photoLink {
            color: #333;
            verticalAlign: middle;
            cursor: pointer;
            background: #eee;
            display: inline-block;
            width: 250px;
            height: 250px;
            line-height: 250px;
            margin: 10px;
            border: 2px solid transparent;
            display: none;
          }

          .photoLink:hover {
            borderColor: blue;
          }
        `}</style>
      </div>
      </Layout>
    )
  }
}
