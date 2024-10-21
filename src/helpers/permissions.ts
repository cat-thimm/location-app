import {Geolocation, Position} from '@capacitor/geolocation';


export async function requestLocation(): Promise<Position | null> {
    try {
        const status = await Geolocation.checkPermissions();

        if (status.location !== 'granted') {
            await Geolocation.requestPermissions();
        }

        if (status.location === 'granted') {
            return await Geolocation.getCurrentPosition();
        } else {
            console.warn('Location permission not granted');
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}