import Document, { Head, Main, NextScript } from 'next/document'

const BodyStyle = {
  background: "#2c3e50",

}

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const props = await Document.getInitialProps(ctx)
    return { ...props, customValue: 'hi there!' }
  }

  render () {
    return (
     <html>
       <Head>
         <title> WallyApp </title>
       </Head>
       <body style={BodyStyle} >
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
