import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
    padding: 0 2rem;
`
const Main = styled.main`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

//SSGの場合
// export async function getStaticProps({ params }){
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props:{
//             product:data,
//         }
//     }
// }
// export async function getStaticPaths(){
//     const req = await fetch(`http://localhost:3000/Products.json`);
//     const data = await req.json();

//     const paths = data.map((product)=>{
//         return {
//             params:{
//                 id: product
//             }
//         }
//     });

//     return {
//         paths,
//         fallback: false
//     };
// }

//SSRの場合
export async function getServerSideProps({ params }){
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props:{
            product:data,
        }
    }
}

const Product = ({product}) => {
    const router = useRouter();
    //console.log(router.query);
    const {id} = router.query;
    return (
        <Container>
            <Main>
                <h1>{id}のページです</h1>
                <Image src={product.image} alt = "" width = "300" height="400" />
                <p>{product.name}</p>
                <br/>
                <Link href="/Products">
                    商品一覧へ
                </Link>
            </Main>
        </Container>
    );
}

export default Product;