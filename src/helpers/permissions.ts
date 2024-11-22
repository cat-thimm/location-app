import { Geolocation, Position } from "@capacitor/geolocation";
import { Capacitor } from "@capacitor/core";

export async function requestLocation(): Promise<Position | null> {
  // Web環境かネイティブ環境かを判定
  const isNative = Capacitor.isNativePlatform();

  try {
    if (isNative) {
      // ネイティブ環境（iOS/Android）での処理
      const status = await Geolocation.checkPermissions();

      if (status.location !== "granted") {
        await Geolocation.requestPermissions();
      }

      if (status.location === "granted") {
        return await Geolocation.getCurrentPosition();
      }
    } else {
      // Web環境での処理
      if ("geolocation" in navigator) {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // ブラウザのPositionをCapacitorのPosition形式に変換
              const capacitorPosition: Position = {
                coords: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  accuracy: position.coords.accuracy,
                  altitude: position.coords.altitude,
                  altitudeAccuracy: position.coords.altitudeAccuracy,
                  heading: position.coords.heading,
                  speed: position.coords.speed,
                },
                timestamp: position.timestamp,
              };
              resolve(capacitorPosition);
            },
            (error) => {
              console.warn("Browser geolocation error:", error.message);
              resolve(null);
            },
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0,
            }
          );
        });
      }
    }

    console.warn(
      "Location permission not granted or geolocation not available"
    );
    return null;
  } catch (error) {
    console.error("Location request error:", error);
    return null;
  }
}
