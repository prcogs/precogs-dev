import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)

      return { ...initialProps }
   }

   render() {
      return (
         <Html lang="fr">
            <Head>
               <link rel="preconnect" href="https://fonts.gstatic.com"/>
               <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap" rel="stylesheet"/>
            </Head>

            <body>
               <Main />
               
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
