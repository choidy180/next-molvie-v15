import Image from "next/image"
import { GoPlus } from "react-icons/go";
import styled from "styled-components"
import { useAuthStore } from "../../../store/useAuthStore";
import { useState } from "react";

interface ContentType {
    title: string | null;
    poster: string | null;
    overview: string;
}

const MovieBox = ({title, poster, overview}:ContentType) => {

    // 노출 여부 핸들러
    const setMovieView = useAuthStore((movieState) => movieState.setView);

    // 이미지 로딩 여부
    const [loaded, setLoaded] = useState(false);

    const ViewHandler = () => {
        setLoaded(true); // 로드 취소
        setMovieView(false); // 노출 취소
    }
    return (
        <Container>
            <div className="blackBox"/>
            {
                loaded === false && (
                    <ContentBox>
                        <Image
                            src={`https://image.tmdb.org/t/p/w200${poster}`}
                            width={400}
                            height={600}
                            alt={overview ? overview?.slice(0, 30) : ''}
                            onLoadStart={()=> setLoaded(true)}
                            onLoad={() => setLoaded(false)}
                        />

                        <div className="textBox">
                            <div>
                                <GoPlus onClick={ViewHandler}/>
                            </div>
                            <h1>{title}</h1>
                            <p>{overview?.length > 400 ? overview?.slice(0, 300) + '...' : overview}</p>
                            <button onClick={() => window.open(`https://www.youtube.com/results?search_query=${title}`)}>SEARCH</button>
                        </div>
                    </ContentBox>
                )
            }
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
    width: auto;
    padding: 1rem;
    background-color: #141414;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 14px;
    gap: 2rem;

    display: flex;
    justify-content: center;
    align-items: start;

    img {
        object-fit: cover;
        border-radius: 14px;
    }

    .textBox {
        width: calc(400px - 4rem);
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        color: #FFFFFF;

        div {
            width: 100%;
            display: flex;
            justify-content: end;
            align-items: center;

            svg {
                width: 2.4rem;
                height: 2.4rem;
                rotate: 45deg;
                cursor: pointer;
                transform: translateY(-10px);
            }
        }

        p {
            font-size: 1rem;
            line-height: 1.4rem;
            margin-top: 2rem;
        }

        button {
            width: 100%;
            margin-top: 2rem;
            padding: 0.6rem;
            font-size: 1.2rem;
            font-weight: 700;
            letter-spacing: 4px;
            outline: none;
            border: none;
            border-radius: 8px;
            color: #FFFFFF;
            background-color: #1ed760;
            cursor: pointer;
        }
    }
`



export default MovieBox;