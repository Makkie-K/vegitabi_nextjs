import Head from "next/head";
import Container from "@mui/material/Container";
import Layout from "/src/components/layouts/layout";
import Box from "@mui/material/Box";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>プライバシーポリシーと利用規約</title>
        <meta name="description" content="プライバシーポリシーと利用規約" />
        <meta
          name="keywords"
          content="Terms of Service, Privacy-Policy, プライバシーポリシー, 利用規約"
        />
        <meta property="og:url" content="https://vegitabi.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="プライバシーポリシー" />
        <meta
          property="og:description"
          content="プライバシーポリシーと利用規約"
        />
        <meta property="og:site_name" content="vegitabi.com" />
        <meta
          property="og:image"
          content="https://vegitabi.com/images/ogp1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container maxWidth="md" sx={{ marginTop: "100px" }}>
        <Box sx={{ width: "100%", maxWidth: "768px", margin: "0 auto" }}>
          <h1>プライバシーポリシーと利用規約</h1>
          <h2>個人情報の利用目的</h2>
          <p>
            当ウェブサイトでは、メールでのお問い合わせの際に名前、メールアドレス等の個人情報をご入力いただく場合がございます。これらの個人情報は質問に対する回答や必要な情報を電子メールアドでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
          </p>
          <h2>個人情報の第三者への開示</h2>
          <p>
            当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
          </p>
          <li>本人のご了解がある場合</li>
          <li>法令等への協力のため、開示が必要となる場合</li>
          <h2>個人情報の開示、訂正、追加、削除、利用停止</h2>
          <p>
            ご本人からの個人データの開示、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させて頂きます。
          </p>
          <h2>アクセス解析ツールについて</h2>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにファーストパーティCookieを使用しています。第三者にデータが送信されることはありません。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
          </p>
          <h2>免責事項</h2>
          <p>
            当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
          <h2>プライバシーポリシーの変更について</h2>
          <p>
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </p>
          <h2>著作権について</h2>
          <p>
            当サイトに掲載されてる情報についての著作権は放棄しておりません。当サイト記事からの引用に関しましては「引用元の明示」によって無償で引用いただけます。ただし、全文転載はお断り致しております。引用許可範囲についても、事前予告なくこれを変更することがあります。
          </p>
          <p>令和6年4月1日 改定</p>
        </Box>
      </Container>
    </Layout>
  );
}
