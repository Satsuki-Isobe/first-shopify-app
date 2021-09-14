import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'

const ScriptPage = () => {
    const CREATE_SCRIPT_TAG = gql`
        mutation MyMutation($input: ScriptTagInput!){
            scriptTagCreate(input: $input){
                scriptTag{
                    id
                }
                userErrors{
                    field
                    message
                }
            }
        }
    `
    const [ handle ,{loading, error, data}] = useMutation(CREATE_SCRIPT_TAG)
    console.log(error)
    console.log(data)
    return (
        <div>
            <button onClick={() => {
                handle({variables: {
                    "input": {
                        "src": "https://fedb-126-243-73-173.ngrok.io/test.js",
                        "displayScope": "ALL"
                    }
            }});
            }}>
                ボタン
            </button>
        </div>
    )
}

export default ScriptPage