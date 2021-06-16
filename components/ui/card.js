import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

const CardItem = ({ article }) => {
  return (
    <Fade>
      <Card>
        <Image
          src={`/images/arts/${article.img}`}
          layout="responsive"
          width={1920}
          height={1080}
        />
        <CardContent>
          <h5>{article.name}</h5>
          <p>{article.excerpt}</p>
        </CardContent>

        <CardActions>
          <Link href={`/articles/${article.slug}`}>
            <Button variant="contained" color="primary">
              Detail
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Fade>
  )
}

export default CardItem
