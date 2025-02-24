import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'

const Tomato: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tomato</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tomato</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tomato page" />
      </IonContent>
    </IonPage>
  )
}

export default Tomato
