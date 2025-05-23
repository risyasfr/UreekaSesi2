export default async function WeatherDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const data = await fetch(`http://api.weatherstack.com/current/${slug}`)

    if (!data.ok) return <div>Post Not Found</div>;

    const post = await data.json();

    return (
        <div>
            <h1>Weather Details</h1>
            <h3>City: {post.name}</h3>
            <h3>Country: {post.country}</h3>
            <h3>Time: {post.localtime}</h3>
            <h3>Temperature: {post.current.temperature}°C</h3>
            <h3>Weather: {post.current.weather_descriptions[0]}</h3>
            <h3>Humidity: {post.current.humidity}%</h3>
            <h3>Wind Speed: {post.current.wind_speed} km/h</h3>
            <h3>UV index: {post.uv_index}</h3>
        </div>
    )


}