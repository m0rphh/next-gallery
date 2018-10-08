import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Modal from '../components/modal'
import Layout from '../components/layout'

export default class extends React.Component {

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
    var element = document.getElementById("logo").remove();
    
  }

  onKeyDown(e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      window.history.back()
    }
  }
  dismissModal() {
    window.history.back()
  }
  render() {
    const { url, images } = this.props

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
          <img id="logo" src="../static/img/goran-matejin-logo.svg" alt="goran matejin photography logo" className="logo homepage-logo"/>
            <style jsx>{`
            .title {
              color: white;
              font-size: 72px;
              text-align: center;
            }
            .homepage-logo {
              z-index: -1
            }
        `}</style>
          </div>
        </Layout>
    )
  }
}
