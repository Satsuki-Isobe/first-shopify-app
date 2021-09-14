import "isomorphic-fetch";
import { gql } from "apollo-boost";

export function SCRIPT_TAG(url) {
  return gql`
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
  `;
}

export const test = async (ctx) => {
  const { client } = ctx;
  const confirmationUrl = await client
    .mutate({
      mutation: SCRIPT_TAG(process.env.HOST),
    })
    .then((response) => response.data.appPurchaseOneTimeCreate.confirmationUrl);
  return ctx.redirect(confirmationUrl);
};
