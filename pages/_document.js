import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  // static getInitialProps({ renderPage }) {
  //   const { html, head, errorHtml, chunks } = renderPage()
  //   const styles = flush()
  //   return { html, head, errorHtml, chunks, styles }
  // }
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          {/* <meta name='viewport' content='width=device-width, initial-scale=1.0' /> */}
          <link rel='stylesheet' href='../static/styles/nprogress.css' />
          <link rel='stylesheet' href='../static/styles/styles.css' />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
