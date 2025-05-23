import { InteractionManager } from "@tsparticles/engine"

interface RequestProps{
  type: string,
  query: string,
  language: string
  unit: string  
}

interface LocationProps {
  name: string,
  country: string,
  region: string,
  lat: number,
  lon: number,
  timezone_id: string,
  localtime: string,
  localtime_epoch: number,
  utc_offset: string
}

interface AstroProps {
  sunrise: string,
  sunset: string,
  moonrise: string,
  moonset: string,
  moon_phase: string,
  moon_illumination: string
}

interface Air_QualityProps {
  co: number,
  no2: number,
  o3: number,
  so2: number,
  pm2_5: number,
  pm10: number,
  us_epa_index: number,
  gb_defra_index: number
}

interface CurrentProps {
  observation_time: string,
  temperature: number,
  weather_code: number,
  weather_icons: string[],
  weather_descriptions: string[],
  astro: AstroProps,
  air_quality: Air_QualityProps,
  wind_speed: number,
  wind_degree: number,
  wind_dir: string,
  pressure: number,
  precip: number,
  humidity: number,
  cloudcover: number,
  feelslike: number,
  uv_index: number,
  visibility: number,
  is_day: string
}

interface WeatherProps {
  request: RequestProps,
  location: LocationProps,
  current: CurrentProps
}

export default async function Weather() {
  const data = await fetch('http://api.weatherstack.com/current')
  const posts: WeatherProps = await data.json()
  return (
    <ul>
      <li>
        Location: {posts.location.name}, {posts.location.country}
        <br />
        Temperature: {posts.current.temperature}°C
      </li>
    </ul>
  )
}