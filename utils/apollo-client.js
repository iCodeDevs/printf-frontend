import  ApolloClient,{InMemoryCache } from 'apollo-boost';
import withApollo from 'next-with-apollo';

//template for testing purpose of boilerplate
const GRAPHQL_URL = 'https://api.graphql.jobs/';


export default withApollo(
    ({initialState}) => 
        new ApolloClient({
            uri: GRAPHQL_URL,
            cache: new InMemoryCache().restore(initialState || {})
        })
)