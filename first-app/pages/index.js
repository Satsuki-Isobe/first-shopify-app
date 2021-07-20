import { Page, Layout, EmptyState } from "@shopify/polaris";
import {ResourcePicker} from '@shopify/app-bridge-react'
import { useState } from "react";
import store from 'store-js'


const Index = () => {
  const [modal, setModal] = useState({open: false})
  const emptyState = !store.get('ids')

  const handleSection = (resources) => {
    const idsFromResources = resources.selection.map(product => product.id)
    setModal({open: false})
    store.set('ids', idsFromResources)
    console.log('this is product ids', store.get('ids'))
    }

  return(
  <Page>
    <ResourcePicker
      resourceType="Product"
      showVariants={false}
      opne={modal.open}
      onCancel={() => setModal({open: false})}
      onSelection={resources => handleSection(resources)}
    />

    <Layout>
      <EmptyState
        heading="Manage your incentory ...."
        action={{
          content: 'Select Products',
          onAction: ()=>setModal({open: true})
        }}
        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg" 
      >
        <p>Select Products</p>
      </EmptyState>
    </Layout>
  </Page>
  )
}

export default Index;
