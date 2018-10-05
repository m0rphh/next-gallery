
import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import Modal from '../components/modal';
import {
  CloudinaryContext,
  Transformation,
  Image
} from 'cloudinary-react';
import Layout from '../components/layout'


export default class extends React.Component {

  static async getInitialProps() {
    const res = await fetch('https://res.cloudinary.com/dj6ppswvb/image/list/b.json')
    const data = await res.json();
    return {
      images: data.resources
    }
  }

  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }


  // handling escape close
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown(e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      // this.props.url.back()
        window.history.back()
    }
  }

  dismissModal() {
    Router.push('/example');
  }

  showPhoto(e, id) {
    e.preventDefault();
    // Router.push(`/?photoId=https://res.cloudinary.com/dj6ppswvb/${id}`, `/photo?id=https://res.cloudinary.com/dj6ppswvb/${id}`)
    Router.push(`/?photoId=${id}`, `/photo?id=${id}`)
  }

  render() {
    const { url, images } = this.props
    return (
      <Layout title='Example page'>
        <div className='grid'>
          {
            url.query.id &&
            <Modal
              id={url.query.id}
              onDismiss={() => this.dismissModal()}
            />
          }

          <CloudinaryContext cloudName="dj6ppswvb">
            {
              images.map(data => {
                return (
                  <div className="responsive" key={data.public_id}>

                    <a
                      href={(`/photo?id=https://res.cloudinary.com/dj6ppswvb/${data.public_id}`)}
                      onClick={(e) => this.showPhoto(e, data.public_id)}
                    >

                      <Image publicId={data.public_id}>
                        <Transformation

                          width='300'
                          crop="scale"
                        //  height="200"
                        //  dpr="auto"
                        //    responsive_placeholder="blank"
                        />
                      </Image>
                    </a>
                  </div>
                )
              })
            }
          </CloudinaryContext>
					<style jsx>{`
          .grid {


          }
					.responsive {
						cursor: pointer;
					}
          .list {
            padding: 50px;
            text-align: center;
          }
          .photo {
            display: flex;
						max-width: 1040px;
						width: 100%;
						margin: auto;
						justify-content: space-between;
						align-items: center;
          }
          .photoLink {
            color: #333;
            verticalAlign: middle;
            cursor: pointer;
            width: 250px;
            height: 250px;
            line-height: 250px;
            margin: 10px;
            border: 2px solid transparent;
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