import styles from '../src/App.css'
import Todo from './components/Todo'
import Header from './components/Header/Header'


function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Todo/>
    </div>
  )
}

export default App
