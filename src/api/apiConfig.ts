interface ApiConfigProps {
    baseUrl: string
    apiKey: string
    image: (imgPath: string) => string
}

const apiConfig: ApiConfigProps = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: import.meta.env.VITE_API_KEY,
    image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig