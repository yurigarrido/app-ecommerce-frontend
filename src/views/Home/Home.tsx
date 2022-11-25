import Counter from "../../components/Counter"
import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Counter/>
    </div>
  )
}

export default Home