import { Page, Layout } from "@shopify/polaris";
import { useState } from "react";
import { Main } from "../components/Main";

const Index = () => {

return(

  <Page fullWidth title="Single column wide layout">
    <Layout>
      <Layout.Section>top</Layout.Section>
      <Main />
      <Layout.Section><div style={{height: '500px', background: '#f2f2f2'}}></div></Layout.Section>
    </Layout>
  </Page>
  )
}

export default Index;
