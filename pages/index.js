import React from 'react'
import Layout from '../components/layout'
import Modal from '../components/modal'
import ExamplePage from './example';

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
    // var element = document.getElementById("logo").remove();

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
          {
            url.query.photoId &&
            <Modal
              id={url.query.photoId}
              onDismiss={() => this.dismissModal()}
            />
          }
        {/* </div> */}
        </Layout>
    )
  }
}