import Head from 'next/head';

function GlobalHead() {
  return (
    <Head>
      <title>Yeolda 열다</title>
      <meta
        name="description"
        content="숨겨진 가능성을 열다. 옷장을 활짝 열어 숨겨진 공간과. 수익 기회를 찾아드려요."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default GlobalHead;
