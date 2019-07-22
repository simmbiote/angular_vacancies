// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBKs0RBAfG1chVC7k9Gf-7aAEK-fidTzEU',
        authDomain: 'composed-sensor-135523.firebaseapp.com',
        databaseURL: 'https://composed-sensor-135523.firebaseio.com',
        projectId: 'composed-sensor-135523',
        storageBucket: 'composed-sensor-135523.appspot.com',
        messagingSenderId: '335702173879',
        appId: '1:335702173879:web:b19ad79b4a1045e1'
    },
    config: {
        apiUrl: 'http://localhost:4000',
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
