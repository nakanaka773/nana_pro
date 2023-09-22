import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';
  return (
    <Html lang="ja">
          <Head>
          {GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                  `,
                }}
              />
            </>
          )}
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
