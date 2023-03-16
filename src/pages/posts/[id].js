import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
        <title>{ postData.title }</title>
      </Head>
      <br></br>
      {postData.title}
      <br></br>
      {postData.id}
      <br></br>
      {/* {postData.date} */}
      <Date dateString={postData.date}></Date>
      <br></br>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </Layout>
  );
}
