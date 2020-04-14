import React from "react";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const CodeEditor = dynamic(() => import('../../../components/CodeEditor/codeEditor'), { ssr: false });


import Layout from '../../../components/Layout/index'

//user specific page 
//coding-platform happens here

const ContestPage = (props) =>{
    const router = useRouter()

    return(
        <Layout>
            <h1>Welcome User In Contest {router.query.contestID}</h1>
            <CodeEditor
            value={"for (var i=0; i < 10; i++) {\n  console.log(i)\n}"} 
            />
        </Layout>
    )
}

export default ContestPage;