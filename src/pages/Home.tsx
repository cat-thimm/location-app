import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MapContainer from '../components/map/map.container';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <MapContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
