
import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import {
  CloudinaryContext,
  Transformation,
  Image
} from 'cloudinary-react';
import Modal from '../components/modal'
import Layout from '../components/layout'
import Overdrive from 'react-overdrive'

export default class ExamplePage extends React.Component {

  static async getInitialProps() {
    const res = await fetch('https://res.cloudinary.com/dj6ppswvb/image/list/b.json')
    const data = await res.json();

    return {
      images: data.resources,
    }
  }

  constructor(props) {
    super(props)
    // this.onKeyDown = this.onKeyDown.bind(this)
    this.state = {
      id: ' '
    }
  }

  // handling escape close
  // componentDidMount() {
  //   document.addEventListener('keydown', this.onKeyDown)
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('keydown', this.onKeyDown)

  // }

  // onKeyDown(e) {
  //   if (!this.props.url.query.photoId) return
  //   if (e.keyCode === 27) {
  //     window.history.back()
  //   }
  // }
  showPhoto(e, id) {
    e.preventDefault();
    Router.push(`/?photoId=${id}`, `/photo?id=${id}`);

  }
  dismissModal() {

  }
  render() {
    const { url, images } = this.props
    return (
      <Layout>
        <div className='grid'>
          {
            url.query.photoId &&
            <Modal
              id={url.query.photoId}
              onDismiss={() => this.dismissModal()}
            />
          }
          <CloudinaryContext cloudName="dj6ppswvb">
            {
              images.map(data => {
                const id = data.public_id;
                return (
                  <Overdrive key={id} id={id.toString()} animationDelay={1} style={{ display: 'inline-block' }}>
                    <div className="responsive" key={id}>
                      <a
                        href={(`/photo?id=${id}`)}
                        onClick={(e) => this.showPhoto(e, id)}
                      >

                        <Image publicId={id}>
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
                  </Overdrive>
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