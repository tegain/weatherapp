import headerLayout from '@/components/header/headerLayout'
import appBackground from '@/components/background/background'
import weatherCard from '@/components/weather/weatherCard'
import searchForm from '@/components/search/searchForm'

const Components = [
  { name: 'app-header', template: headerLayout },
  { name: 'app-background', template: appBackground },
  { name: 'app-search', template: searchForm },
  { name: 'weather-card', template: weatherCard }
]

export default Components
