import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MapContainer from '../components/MapContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Location App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MapContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
