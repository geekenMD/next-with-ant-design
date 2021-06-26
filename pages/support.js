import { Row, Col, Card, Typography, Button } from 'antd'
import { GithubOutlined, createFromIconfontCN } from '@ant-design/icons';
import Head from 'next/head'


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export default function () {

  return <div>
    <Head>
  <title>Geeken Test</title>
  <meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@WatchBrime" />
<meta name="twitter:creator" content="@geeken" />
<meta property="og:url" content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/" />
<meta property="og:title" content="A Twitter for My Sister" />
<meta property="og:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
<meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" />
</Head>
  <Row>
    <Col span={24}>
      <Card>

        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          Contribute to source code
        </Typography.Title>

        <Typography.Paragraph style={{ textAlign: 'center' }}>

          
          <p style={{fontSize:'1.2em'}}>
            This project is still in a very early stage of development.  <br />
            Any support is greatly appreciated.<br />
            If your company uses this project contact us and we will put your image on the Landing page
          </p>
          <p style={{ fontSize: '1.2em' }}>
            Please send a GitHub Pull Request with a clear list of what you've done.<br />
            When you send a pull request. Please follow good prectices and coding conventions and make
            sure all of your commits are atomic (one feature per commit).
          </p>
          <Button
            size="large"
            type="primary"
            icon={<GithubOutlined />}
            onClick={() => window.open("https://github.com/Destructor1702/next-with-ant-design/", '_blank')}
          >
            Contribute on Github
          </Button>

        </Typography.Paragraph>
      </Card>
    </Col>
    <Col span={24}>
      <Card>

        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          Donate
        </Typography.Title>

        <Typography.Paragraph style={{ textAlign: 'center' }}>
          <img src="/PayPal.svg" alt="PayPal" height="55px" />
          <br />
          <Button
            style={{margin:'2em 0'}}
            size="large"
            type="primary"
            onClick={() => window.open("https://www.paypal.me/DiegoV17", '_blank')}
          >
            Donate via Paypal
          </Button>
          
          <h4>
            Donate Bitcoin:
          </h4>
          <img src="/btc.jpg" alt="Bitcoin QR code" height="200px" />
          <p>1KaEDh8VsKmTowAXsHnZUVq25dvGA558XR</p>

          


        </Typography.Paragraph>
      </Card>
    </Col>
  </Row>
  </div>
}