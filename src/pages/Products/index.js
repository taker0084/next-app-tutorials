import styled from "styled-components";
import styles from "@/styles/Home.module.css";
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
const Title = styled.h2`
    padding-bottom: 10px;
    color: white;
    font-size: 50px;
    text-decoration: none;
`
const Itemli = styled.li`
    padding-bottom: 10px;
`
const Products = () => {
    return (
        <Container>
            <Main>
                <Title>商品一覧</Title>
                <ul>
                    <Itemli>
                        <Link href = "/Products/smartphone">スマートフォン</Link>
                    </Itemli>
                    <Itemli>
                        <Link href = "/Products/PC">パソコン</Link>
                    </Itemli>
                    <Itemli>
                        <Link href = "/Products/headphone">ヘッドフォン</Link>
                    </Itemli>
                </ul>
            </Main>
        </Container>
    );
}

export default Products;