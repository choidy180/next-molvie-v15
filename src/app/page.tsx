'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuthStore } from '../../store/useAuthStore';
import MovieBox from './components/movieBox';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export default function TmdbApiTestPage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

    // 전역 변수
    
    // 타이틀
    const movieTitle = useAuthStore((movieState) => movieState.title);
    const setMovieTitle = useAuthStore((movieState) => movieState.setTitle);

    // 이미지
    const movieImage = useAuthStore((movieState) => movieState.image);
    const setMovieImage = useAuthStore((movieState) => movieState.setImage);

    // 설명
    const movieOverview = useAuthStore((movieState) => movieState.overview);
    const setMovieOverview = useAuthStore((movieState) => movieState.setOverview);

    // 노출
    const movieView = useAuthStore((movieState) => movieState.view);
    const setMovieView = useAuthStore((movieState) => movieState.setView);

    const fetchMovies = async (search?: string) => {
        try {
            const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
            const endpoint = search
                ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=ko-KR&query=${encodeURIComponent(search)}`
                : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`;
            const res = await fetch(endpoint);
            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`status ${res.status}: ${errorText}`);
            }
            const data = await res.json();
            setMovies(data.results);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        fetchMovies(query);
    };

    const movieViewHandler = (title:string, poster:string, overview:string) => {
        setMovieTitle(title);
        setMovieImage(poster);
        setMovieOverview(overview);

        setMovieView(true);
    }

    return (
        <Container>
            <h1>TMDB 인기 영화 테스트</h1>
            <form onSubmit={handleSearch}>
                <SearchInput
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="영화 제목을 검색하세요"
                />
                <SearchButton type="submit">검색</SearchButton>
            </form>
            {loading && <p>로딩 중...</p>}
            {error && <ErrorText>에러 발생: {error}</ErrorText>}
            <MovieGrid>
                {movies.map(movie => (
                    <MovieCard key={movie.id} onClick={() => movieViewHandler(movie.title, movie.poster_path, movie.overview)}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        <div />
                        <h2>{movie.title}</h2>
                    </MovieCard>
                ))}
            </MovieGrid>
            {
                movieView && (
                    <MovieBox
                        title={movieTitle}
                        poster={movieImage}
                        overview={movieOverview}
                    />
                )
            }
        </Container>
    );
}

const Container = styled.div`
    padding: 2rem;
    color: white;
`;

const ErrorText = styled.p`
    color: red;
`;

const SearchInput = styled.input`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin-right: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SearchButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #1db954;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #1ed760;
    }
`;

const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
`;

const MovieCard = styled.div`
    position: relative;
    background: #f9f9f9;
    border-radius: 10px;
    text-align: center;
    height: 232px;
    overflow: hidden;
    cursor: pointer;
    img {
        border-radius: 8px;
        width: 100%;
        object-fit: cover;
    }
    h2 {
        font-size: 1.4rem;
        margin: 0.5rem 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }
    p {
        font-size: 0.875rem;
        color: #555;
    }
    div {
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0%;
        top: 0%;
        background-color: black;
        opacity: 0.4;
    }

    &:hover {
        div, h2 {
            display: block;
        }
    }
`;