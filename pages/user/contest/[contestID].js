import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../../components/Layout/index'

//user specific page 
//coding-platform happens here

const ContestPage = (props) =>{

    const router=useRouter();

    return(
        <Layout>
            <h1>Welcome User In Contest {router.query.contestID}</h1>
        </Layout>
    )
}

export default ContestPage;