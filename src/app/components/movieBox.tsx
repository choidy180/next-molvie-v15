import Image from "next/image"
import styled from "styled-components"

interface ContentType {
    title: string | null;
    poster: string | null;
    overview: string | null;
}

const MovieBox = ({title, poster, overview}:ContentType) => {
    return (
        <Container onClick={()=> console.log(title)}>
            <div className="blackBox"/>
            <ContentBox>
                <Image
                    src={`https://image.tmdb.org/t/p/w200${poster}`}
                    width={400}
                    height={600}
                    alt={overview ? overview?.slice(0, 30) : ''}
                />
            </ContentBox>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;

    .blackBox {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000000;
        opacity: 0.6;
    }
`

const ContentBox = styled.div`
    position: absolute;
    width: 1000px;
    padding: 1rem;
    background-color: #141414;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 14px;

    display: flex;
    justify-content: center;
    align-items: start;

    img {
        object-fit: cover;
        border-radius: 14px;
        gap: 2rem;
    }
`



export default MovieBox;