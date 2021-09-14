import { Page, Layout, EmptyState } from "@shopify/polaris";
import {ResourcePicker} from '@shopify/app-bridge-react'
import { useState } from "react";
import store from 'store-js'
import ProductList from "../components/ProductList";
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'


const Index = () => {
  const [modal, setModal] = useState({open: false})
  const emptyState = !store.get('ids')

  const handleSection = (resources) => {
    const idsFromResources = resources.selection.map(product => product.id)
    setModal({open: false})
    store.set('ids', idsFromResources)
    console.log('this is product ids', store.get('ids'))
  }

  const TEST = gql`
  query {
    customers(first: 20){
      edges{
        node{
          id
          firstName
          lastName
          email
          validEmailAddress
          verifiedEmail
          ordersCount
          totalSpent
        }
      }
    }
  }
  `

  const { loading, error, data } = useQuery(TEST)
 
  if(loading) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>

  if(loading_c) return <div>Loading...</div>
  const filtered = data.customers.edges.filter(res => {
    return res.node.totalSpent < 1000
  })

  return(
  <Page>
    <ResourcePicker
      resourceType="Product"
      showVariants={false}
      open={modal.open}
      onCancel={() => setModal({open: false})}
      onSelection={resources => handleSection(resources)}
    />

    { emptyState ? 
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
          {filtered.map(res => {
            return (
              <div key={res.node.id}>{res.node.lastName}</div>
            )
          })}
        </EmptyState>
      </Layout>
    :
      <ProductList />
    }
  </Page>
  )
}

export default Index;
