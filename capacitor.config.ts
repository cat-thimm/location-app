import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'location-app',
  webDir: 'dist',
  plugins: {
    Geolocation: {
      // android: {
      //   permissions: [
      //     "ACCESS_FINE_LOCATION",
      //     "ACCESS_COARSE_LOCATION"
      //   ]
      // },
      // ios: {
      //   usageDescription: "We need your location to show relevant information",
      //   backgroundUsageDescription: "We need your location even in the background to provide you services"
      // }
    }
  }
};

export default config;
