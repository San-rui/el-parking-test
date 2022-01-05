import { FC } from "react";
import { Layout } from "../../components/layout";
import { useTrivia } from "../../hooks/useTrivia";

const Home :FC= () =>{

    const { items } = useTrivia()
    console.log(items)

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