// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  CATALOGUE_URL : "https://127.0.0.1:8000/api/catalogue",
  // CATALOGUE_URL : "../api/produits.json",
  USERS_URL: "https://127.0.0.1:8000/api/users",
  LIVREURS_URL : "https://127.0.0.1:8000/api/livreurs",
  LOGIN_URL : "https://127.0.0.1:8000/api/login_check",
  INSCRIPTION_URL : "https://127.0.0.1:8000/api/sign_up",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
