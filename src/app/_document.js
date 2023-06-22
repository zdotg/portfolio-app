import Document, { Html, Head, Main, NextScript } from "next/document";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            src="https://kit.fontawesome.com/f38f31d1bf.js"
            crossOrigin="anonymous"
          ></script>
          <style>{`body {${inter.className}}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
