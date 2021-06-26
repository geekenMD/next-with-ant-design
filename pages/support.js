import Head from "next/head"
import { Row, Col, Card, Typography, Button } from 'antd'
import { GithubOutlined, createFromIconfontCN } from '@ant-design/icons';


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export default function () {
  return (
    <div>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YOUR_TWITTER_USERNAME" />
        <meta name="twitter:title" content="TITLE_FOR_YOUR_PAGE" />
        <meta name="twitter:description" content="DESCRIPTION_FOR_YOUR_PAGE" />
        <meta name="twitter:image" content="URL_FOR_YOUR_IMAGE" />
      </Head>
      <p>Your page content.</p>
    </div>
  )
}