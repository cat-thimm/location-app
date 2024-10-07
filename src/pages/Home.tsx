import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MapContainer from '../components/MapContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar />
        </IonHeader>
        <MapContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
