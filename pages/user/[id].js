import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout/index'

//This will be the user specific page 
//Shows score,contest logged in, currently going contest etc 

const UserPage = (props) =>{
    const router = useRouter()

    return(
        <Layout>
            <h1>Welcome User {router.query.id}</h1>
        </Layout>
    )
}

export default UserPage;