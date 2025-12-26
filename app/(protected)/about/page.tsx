import React, {Suspense} from 'react';
import prisma from "@/lib/prisma";
import {sleep} from "@/components/UserCreate/userAction";
import BlogForm from "@/components/UserCreate/BlogForm";


async function Page( ) {

    return <>
        <Suspense fallback={<div>Loading screen</div>}>
            <Blogs></Blogs>
        </Suspense>
        <BlogForm/>

    </>

}

export default Page;


async function Blogs(){
    const blog = await prisma.blog.findMany()

    return (
        <div>
            {
                blog.map(b=>{
                    return <div key={b.id}>
                        <h6>Title: {b.title}</h6>
                        <p>Desc : {b.description}</p>
                        <div>
                            {/*<span>{b.stoppedDate.toString()} : stopped date</span>*/}
                            {/*<span>{b.beginDate.toString()} : begindate</span>*/}
                            {/*<span>{b.endDate.toString()} : b.enddate</span>*/}
                            <span> Status: -----------{b.status} : Status</span>
                        </div>
                    </div>
                })
            }
        </div> )
}

