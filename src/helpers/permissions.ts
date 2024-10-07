import {Geolocation, Position} from '@capacitor/geolocation';


export async function requestLocation(): Promise<Position | null> {
    const status = await Geolocation.checkPermissions();

    if (status.location !== 'granted') {
        await Geolocation.requestPermissions();
    }

    if (status.location === 'granted') {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current position:', coordinates);
        return coordinates;
    } else {
        console.log('Location permission not granted');
        return null;
    }
}