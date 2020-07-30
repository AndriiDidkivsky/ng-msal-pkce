# ng-msal-pkce

The very basic example of usage angular with msal-browser.

Project generated with [angular-cli](https://angular.io/cli) please check the documentation.


## Structure
App consists of two pages  
- Home  - protected by auth guard
- About - not protected by auth guard

Button on the home page sent request to ms-graph  
All auth code under the `authentication`  folder  
Also check `app-initializer.ts` here we're waiting until msal get ready
## Configuration

You can run the sample by changing the `auth-config.ts` file to match your app registration and  
running the npm command npm start in the project folder.  
Also check `msal-browser` [documentation](https://www.npmjs.com/package/@azure/msal-browser) and create new app registration on Azure.

##### Please note! It's currently working only in B2B scenarios check documentation above.
