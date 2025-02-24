import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { ellipse, square, triangle } from 'ionicons/icons'
import { Redirect, Route } from 'react-router-dom'
import Calendar from './pages/Calendar'
import Config from './pages/Config'
import List from './pages/List'
import Tomato from './pages/Tomato'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css'

/* Theme variables */
import './theme/variables.css'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route path="/tomato">
            <Tomato />
          </Route>
          <Route path="/config">
            <Config />
          </Route>
          <Route exact path="/">
            <Redirect to="/list" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="list" href="/list">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="calendar" href="/calendar">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Calendar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tomato" href="/tomato">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tomato</IonLabel>
          </IonTabButton>
          <IonTabButton tab="config" href="/config">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Config</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)

export default App
