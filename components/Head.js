import NextHead from 'next/head';

const defaultTitle = 'Glosmaster3000';
const defaultDescription = 'Välkommen till Glosmaster3000';
const defaultIcon = '/static/img/infopingIcon.png';
const defaultOGURL = 'https://glosmaster3000.com';
const defaultOGImage = '/static/img/infopingHeader.jpg';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" key="charSet" />
    <title key="title">{props.title || defaultTitle}</title>
    <link rel="manifest" href="/static/manifest.json" key="manifest" />
    <meta
      name="description"
      content={props.description || defaultDescription}
      key="description"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
      key="viewport"
    />
    <link rel="icon" href={props.icon || defaultIcon} key="icon" />
    <meta property="og:url" content={props.url || defaultOGURL} key="ogUrl" />
    <meta
      property="og:title"
      content={props.title || defaultTitle}
      key="ogTitle"
    />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
      key="ogDescription"
    />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="default"
      key="statusbar"
    />
    <link
      rel="apple-touch-icon"
      href={props.icon || defaultIcon}
      key="appletouchicon"
    />
    <link
      rel="apple-touch-startup-image"
      href="/static/img/infopingStartUpScreen.png"
      key="appletouchstartupimage"
    />
    <meta
      name="apple-mobile-web-app-capable"
      content="yes"
      key="applemobilewebappcapable"
    />

    <meta
      name="twitter:site"
      content={props.url || defaultOGURL}
      key="twittersite"
    />
    <meta name="twitter:card" content="summary_large_image" key="twittercard" />
    <meta
      name="twitter:image"
      content={props.icon || defaultIcon}
      key="twitterimage"
    />
    <meta
      property="og:image"
      content={props.OGImage || defaultOGImage}
      key="ogImage"
    />
    <meta property="og:image:width" content="1200" key="ogImageWidth" />
    <meta property="og:image:height" content="630" key="ogImageHeight" />
  </NextHead>
);

export default Head;
