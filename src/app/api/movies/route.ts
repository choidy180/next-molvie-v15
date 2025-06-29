export async function GET() {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ko-KR`
    );
    const data = await res.json();
    return Response.json(data);
}