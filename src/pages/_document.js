import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* script is responsible for determining and applying a dark mode theme
         to your web application based on the user's preference and system settings */}
         
         
         {/* strategy='beforeInteractive' means that the script will be executed
          before the webpage becomes interactive but after it has loaded */}
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
