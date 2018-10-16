
import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
// import Modal from '../components/modal';
import {
  CloudinaryContext,
  Transformation,
  Image
} from 'cloudinary-react';
import Layout from '../components/layout';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Overdrive from 'react-overdrive';

export default class GalleryPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      imageWidth: '300',
      modalOpen: false
    }
  }
  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  componentDidMount() {
    if(window.innerWidth > 1000) {
      this.setState({
        imageWidth: '500'
      })
    }
  }


  showPhoto(e, id) {
    e.preventDefault();
    Router.push(`/?photoId=${id}`, `/photo?id=${id}`);
    this.setState({ modalOpen: true });
  }
  dismissModal() {
    window.history.back()
  }
  render() {
    const { url, images} = this.props
    return (
      <Layout title='Gallery page'>
        <div className='grid'>
          <Button type='button' onClick={this.handleOpen.bind(this)}>Open Modal</Button>
          {/* {
            url.query.photoId &&
            <Modal
              id={url.query.photoId}
              onDismiss={() => this.dismissModal()}
            />
          } */}

          <CloudinaryContext cloudName="dj6ppswvb">
            {
              images.map(data => {
                return (
                  <Overdrive key={data.public_id} id={data.public_id.toString()} animationDelay={1} style={{ display: 'inline-block' }}>
                  <div className="responsive" key={data.public_id}>
                    <a
                      href={(`/photo?id=${data.public_id}`)}
                      onClick={(e) => this.showPhoto(e, data.public_id)}
                    >
                      <Image publicId={data.public_id}>
                        <Transformation

                          width="300"
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
GalleryPage.getInitialProps = async ({ req }) => {
  const res = await fetch('https://res.cloudinary.com/dj6ppswvb/image/list/dev.json')
  const data = await res.json();
  return {
    images: data.resources,
  }
}
