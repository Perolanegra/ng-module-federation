import { Injectable } from '@angular/core';
import { Microfrontend } from './mfe';

@Injectable({ providedIn: 'root' })
export class WatcherService {
  retrieveMfes(): Promise<Microfrontend[]> {
    return Promise.resolve([
      {
        // For Loading
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './AppModule',

        // For Routing
        displayName: 'Pokemon',
        routePath: '',
        ngModuleName: 'AppModule'
      },
      // {
      //   // For
      //   type: 'module',
      //   remoteEntry: 'http://localhost:3001/remoteEntry.js',
      //   exposedModule: './Module',

      //   // For Routing
      //   displayName: 'Bookings',
      //   routePath: 'bookings',
      //   ngModuleName: 'BookingsModule'
      // }
    ] as Microfrontend[]);
  }
}
