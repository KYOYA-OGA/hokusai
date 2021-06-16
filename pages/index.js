import { getJsonData } from '../utils/tool'
import CarouselComp from '../components/ui/carousel'
import Articles from '../components/home/articles'

const Home = ({ data }) => {
  return (
    <main>
      <CarouselComp data={data.carousel} />
      <section className="mt-3">
        <Articles data={data.articles} />
      </section>
    </main>
  )
}

export const getStaticProps = async () => {
  const data = await getJsonData()
  return {
    props: {
      data,
    },
  }
}

export default Home
