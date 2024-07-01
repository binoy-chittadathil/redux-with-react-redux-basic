
import { Provider } from 'react-redux'
import './App.css'
import Count from './components/Count'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
    <div>
      <Count/>
    </div>
    </Provider>
  )
}

export default App
