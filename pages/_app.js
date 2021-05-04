import React from 'react'
import {MDXProvider} from '@mdx-js/react'

const mdComponents = {
  h1: props => <h1 style={{color: 'tomato'}} {...props} />
}

const MDXPage = ({Component, pageProps}) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />
  </MDXProvider>
)

export default MDXPage
