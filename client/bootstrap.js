import { store } from '@things-factory/shell'
import productBase from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    productBase
  })
}
