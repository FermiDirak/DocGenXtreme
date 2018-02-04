'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
exports.unregister = unregister;
// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = process.env.PUBLIC_URL + '/service-worker.js';

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://goo.gl/SC7cgQ');
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;
      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.');
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RlclNlcnZpY2VXb3JrZXIuanMiXSwibmFtZXMiOlsicmVnaXN0ZXIiLCJ1bnJlZ2lzdGVyIiwiaXNMb2NhbGhvc3QiLCJCb29sZWFuIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsIm1hdGNoIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwibmF2aWdhdG9yIiwicHVibGljVXJsIiwiVVJMIiwiUFVCTElDX1VSTCIsIm9yaWdpbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzd1VybCIsImNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyIiwic2VydmljZVdvcmtlciIsInJlYWR5IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlclZhbGlkU1ciLCJyZWdpc3RyYXRpb24iLCJvbnVwZGF0ZWZvdW5kIiwiaW5zdGFsbGluZ1dvcmtlciIsImluc3RhbGxpbmciLCJvbnN0YXRlY2hhbmdlIiwic3RhdGUiLCJjb250cm9sbGVyIiwiY2F0Y2giLCJlcnJvciIsImZldGNoIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJoZWFkZXJzIiwiZ2V0IiwiaW5kZXhPZiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBb0J3QkEsUTtRQTBGUkMsVSxHQUFBQSxVO0FBOUdoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQU1DLGNBQWNDLFFBQ2xCQyxPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixLQUE2QixXQUE3QjtBQUNFO0FBQ0FGLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQWhCLEtBQTZCLE9BRi9CO0FBR0U7QUFDQUYsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLEtBQXpCLENBQ0Usd0RBREYsQ0FMZ0IsQ0FBcEI7O0FBVWUsU0FBU1AsUUFBVCxHQUFvQjtBQUNqQyxNQUFJUSxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBekIsSUFBeUMsbUJBQW1CQyxTQUFoRSxFQUEyRTtBQUN6RTtBQUNBLFFBQU1DLFlBQVksSUFBSUMsR0FBSixDQUFRTCxRQUFRQyxHQUFSLENBQVlLLFVBQXBCLEVBQWdDVixPQUFPQyxRQUF2QyxDQUFsQjtBQUNBLFFBQUlPLFVBQVVHLE1BQVYsS0FBcUJYLE9BQU9DLFFBQVAsQ0FBZ0JVLE1BQXpDLEVBQWlEO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRURYLFdBQU9ZLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQU07QUFDcEMsVUFBTUMsUUFBV1QsUUFBUUMsR0FBUixDQUFZSyxVQUF2Qix1QkFBTjs7QUFFQSxVQUFJWixXQUFKLEVBQWlCO0FBQ2Y7QUFDQWdCLGdDQUF3QkQsS0FBeEI7O0FBRUE7QUFDQTtBQUNBTixrQkFBVVEsYUFBVixDQUF3QkMsS0FBeEIsQ0FBOEJDLElBQTlCLENBQW1DLFlBQU07QUFDdkNDLGtCQUFRQyxHQUFSLENBQ0UsMkRBQ0Usb0RBRko7QUFJRCxTQUxEO0FBTUQsT0FaRCxNQVlPO0FBQ0w7QUFDQUMsd0JBQWdCUCxLQUFoQjtBQUNEO0FBQ0YsS0FuQkQ7QUFvQkQ7QUFDRjs7QUFFRCxTQUFTTyxlQUFULENBQXlCUCxLQUF6QixFQUFnQztBQUM5Qk4sWUFBVVEsYUFBVixDQUNHbkIsUUFESCxDQUNZaUIsS0FEWixFQUVHSSxJQUZILENBRVEsd0JBQWdCO0FBQ3BCSSxpQkFBYUMsYUFBYixHQUE2QixZQUFNO0FBQ2pDLFVBQU1DLG1CQUFtQkYsYUFBYUcsVUFBdEM7QUFDQUQsdUJBQWlCRSxhQUFqQixHQUFpQyxZQUFNO0FBQ3JDLFlBQUlGLGlCQUFpQkcsS0FBakIsS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUMsY0FBSW5CLFVBQVVRLGFBQVYsQ0FBd0JZLFVBQTVCLEVBQXdDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0FULG9CQUFRQyxHQUFSLENBQVksMkNBQVo7QUFDRCxXQU5ELE1BTU87QUFDTDtBQUNBO0FBQ0E7QUFDQUQsb0JBQVFDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNEO0FBQ0Y7QUFDRixPQWZEO0FBZ0JELEtBbEJEO0FBbUJELEdBdEJILEVBdUJHUyxLQXZCSCxDQXVCUyxpQkFBUztBQUNkVixZQUFRVyxLQUFSLENBQWMsMkNBQWQsRUFBMkRBLEtBQTNEO0FBQ0QsR0F6Qkg7QUEwQkQ7O0FBRUQsU0FBU2YsdUJBQVQsQ0FBaUNELEtBQWpDLEVBQXdDO0FBQ3RDO0FBQ0FpQixRQUFNakIsS0FBTixFQUNHSSxJQURILENBQ1Esb0JBQVk7QUFDaEI7QUFDQSxRQUNFYyxTQUFTQyxNQUFULEtBQW9CLEdBQXBCLElBQ0FELFNBQVNFLE9BQVQsQ0FBaUJDLEdBQWpCLENBQXFCLGNBQXJCLEVBQXFDQyxPQUFyQyxDQUE2QyxZQUE3QyxNQUErRCxDQUFDLENBRmxFLEVBR0U7QUFDQTtBQUNBNUIsZ0JBQVVRLGFBQVYsQ0FBd0JDLEtBQXhCLENBQThCQyxJQUE5QixDQUFtQyx3QkFBZ0I7QUFDakRJLHFCQUFheEIsVUFBYixHQUEwQm9CLElBQTFCLENBQStCLFlBQU07QUFDbkNqQixpQkFBT0MsUUFBUCxDQUFnQm1DLE1BQWhCO0FBQ0QsU0FGRDtBQUdELE9BSkQ7QUFLRCxLQVZELE1BVU87QUFDTDtBQUNBaEIsc0JBQWdCUCxLQUFoQjtBQUNEO0FBQ0YsR0FqQkgsRUFrQkdlLEtBbEJILENBa0JTLFlBQU07QUFDWFYsWUFBUUMsR0FBUixDQUNFLCtEQURGO0FBR0QsR0F0Qkg7QUF1QkQ7O0FBRU0sU0FBU3RCLFVBQVQsR0FBc0I7QUFDM0IsTUFBSSxtQkFBbUJVLFNBQXZCLEVBQWtDO0FBQ2hDQSxjQUFVUSxhQUFWLENBQXdCQyxLQUF4QixDQUE4QkMsSUFBOUIsQ0FBbUMsd0JBQWdCO0FBQ2pESSxtQkFBYXhCLFVBQWI7QUFDRCxLQUZEO0FBR0Q7QUFDRiIsImZpbGUiOiJyZWdpc3RlclNlcnZpY2VXb3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbiBwcm9kdWN0aW9uLCB3ZSByZWdpc3RlciBhIHNlcnZpY2Ugd29ya2VyIHRvIHNlcnZlIGFzc2V0cyBmcm9tIGxvY2FsIGNhY2hlLlxuXG4vLyBUaGlzIGxldHMgdGhlIGFwcCBsb2FkIGZhc3RlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyBpbiBwcm9kdWN0aW9uLCBhbmQgZ2l2ZXNcbi8vIGl0IG9mZmxpbmUgY2FwYWJpbGl0aWVzLiBIb3dldmVyLCBpdCBhbHNvIG1lYW5zIHRoYXQgZGV2ZWxvcGVycyAoYW5kIHVzZXJzKVxuLy8gd2lsbCBvbmx5IHNlZSBkZXBsb3llZCB1cGRhdGVzIG9uIHRoZSBcIk4rMVwiIHZpc2l0IHRvIGEgcGFnZSwgc2luY2UgcHJldmlvdXNseVxuLy8gY2FjaGVkIHJlc291cmNlcyBhcmUgdXBkYXRlZCBpbiB0aGUgYmFja2dyb3VuZC5cblxuLy8gVG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgYmVuZWZpdHMgb2YgdGhpcyBtb2RlbCwgcmVhZCBodHRwczovL2dvby5nbC9Ld3ZETnkuXG4vLyBUaGlzIGxpbmsgYWxzbyBpbmNsdWRlcyBpbnN0cnVjdGlvbnMgb24gb3B0aW5nIG91dCBvZiB0aGlzIGJlaGF2aW9yLlxuXG5jb25zdCBpc0xvY2FsaG9zdCA9IEJvb2xlYW4oXG4gIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcbiAgICAvLyBbOjoxXSBpcyB0aGUgSVB2NiBsb2NhbGhvc3QgYWRkcmVzcy5cbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdbOjoxXScgfHxcbiAgICAvLyAxMjcuMC4wLjEvOCBpcyBjb25zaWRlcmVkIGxvY2FsaG9zdCBmb3IgSVB2NC5cbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUubWF0Y2goXG4gICAgICAvXjEyNyg/OlxcLig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykpezN9JC9cbiAgICApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXG4gICAgY29uc3QgcHVibGljVXJsID0gbmV3IFVSTChwcm9jZXNzLmVudi5QVUJMSUNfVVJMLCB3aW5kb3cubG9jYXRpb24pO1xuICAgIGlmIChwdWJsaWNVcmwub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICAvLyBPdXIgc2VydmljZSB3b3JrZXIgd29uJ3Qgd29yayBpZiBQVUJMSUNfVVJMIGlzIG9uIGEgZGlmZmVyZW50IG9yaWdpblxuICAgICAgLy8gZnJvbSB3aGF0IG91ciBwYWdlIGlzIHNlcnZlZCBvbi4gVGhpcyBtaWdodCBoYXBwZW4gaWYgYSBDRE4gaXMgdXNlZCB0b1xuICAgICAgLy8gc2VydmUgYXNzZXRzOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29raW5jdWJhdG9yL2NyZWF0ZS1yZWFjdC1hcHAvaXNzdWVzLzIzNzRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHN3VXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vc2VydmljZS13b3JrZXIuanNgO1xuXG4gICAgICBpZiAoaXNMb2NhbGhvc3QpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBydW5uaW5nIG9uIGxvY2FsaG9zdC4gTGV0cyBjaGVjayBpZiBhIHNlcnZpY2Ugd29ya2VyIHN0aWxsIGV4aXN0cyBvciBub3QuXG4gICAgICAgIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsKTtcblxuICAgICAgICAvLyBBZGQgc29tZSBhZGRpdGlvbmFsIGxvZ2dpbmcgdG8gbG9jYWxob3N0LCBwb2ludGluZyBkZXZlbG9wZXJzIHRvIHRoZVxuICAgICAgICAvLyBzZXJ2aWNlIHdvcmtlci9QV0EgZG9jdW1lbnRhdGlvbi5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAnVGhpcyB3ZWIgYXBwIGlzIGJlaW5nIHNlcnZlZCBjYWNoZS1maXJzdCBieSBhIHNlcnZpY2UgJyArXG4gICAgICAgICAgICAgICd3b3JrZXIuIFRvIGxlYXJuIG1vcmUsIHZpc2l0IGh0dHBzOi8vZ29vLmdsL1NDN2NnUSdcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElzIG5vdCBsb2NhbCBob3N0LiBKdXN0IHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZFNXKHN3VXJsKSB7XG4gIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgLnJlZ2lzdGVyKHN3VXJsKVxuICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xuICAgICAgICBpbnN0YWxsaW5nV29ya2VyLm9uc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIuc3RhdGUgPT09ICdpbnN0YWxsZWQnKSB7XG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgb2xkIGNvbnRlbnQgd2lsbCBoYXZlIGJlZW4gcHVyZ2VkIGFuZFxuICAgICAgICAgICAgICAvLyB0aGUgZnJlc2ggY29udGVudCB3aWxsIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgY2FjaGUuXG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHBlcmZlY3QgdGltZSB0byBkaXNwbGF5IGEgXCJOZXcgY29udGVudCBpc1xuICAgICAgICAgICAgICAvLyBhdmFpbGFibGU7IHBsZWFzZSByZWZyZXNoLlwiIG1lc3NhZ2UgaW4geW91ciB3ZWIgYXBwLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmV3IGNvbnRlbnQgaXMgYXZhaWxhYmxlOyBwbGVhc2UgcmVmcmVzaC4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gcHJlY2FjaGVkLlxuICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBwZXJmZWN0IHRpbWUgdG8gZGlzcGxheSBhXG4gICAgICAgICAgICAgIC8vIFwiQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLlwiIG1lc3NhZ2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOicsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwpIHtcbiAgLy8gQ2hlY2sgaWYgdGhlIHNlcnZpY2Ugd29ya2VyIGNhbiBiZSBmb3VuZC4gSWYgaXQgY2FuJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICBmZXRjaChzd1VybClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBFbnN1cmUgc2VydmljZSB3b3JrZXIgZXhpc3RzLCBhbmQgdGhhdCB3ZSByZWFsbHkgYXJlIGdldHRpbmcgYSBKUyBmaWxlLlxuICAgICAgaWYgKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxuICAgICAgICByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykuaW5kZXhPZignamF2YXNjcmlwdCcpID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2VydmljZSB3b3JrZXIgZm91bmQuIFByb2NlZWQgYXMgbm9ybWFsLlxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLidcbiAgICAgICk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==