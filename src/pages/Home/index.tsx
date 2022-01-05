import { FC } from "react";
import { Layout } from "../../components/layout";

const Home :FC= () =>{

    return(
        <Layout>
            <div className="home">
                <div className='hello-text'>
                    <span>soy la home </span>
                </div> 
            </div>
        </Layout>
    )
}

export { Home }