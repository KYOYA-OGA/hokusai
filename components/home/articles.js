import Masonry from 'react-masonry-css'
import CardItem from '../ui/card'

const Articles = ({ data }) => {
  const breakpoints = {
    default: 3,
    992: 2,
    576: 1,
  }

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map((article) => {
        return <CardItem key={article.id} article={article} />
      })}
    </Masonry>
  )
}

export default Articles
