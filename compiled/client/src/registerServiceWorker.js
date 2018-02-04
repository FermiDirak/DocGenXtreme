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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyIiwidW5yZWdpc3RlciIsImlzTG9jYWxob3N0IiwiQm9vbGVhbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJtYXRjaCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIm5hdmlnYXRvciIsInB1YmxpY1VybCIsIlVSTCIsIlBVQkxJQ19VUkwiLCJvcmlnaW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3dVcmwiLCJjaGVja1ZhbGlkU2VydmljZVdvcmtlciIsInNlcnZpY2VXb3JrZXIiLCJyZWFkeSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXJWYWxpZFNXIiwicmVnaXN0cmF0aW9uIiwib251cGRhdGVmb3VuZCIsImluc3RhbGxpbmdXb3JrZXIiLCJpbnN0YWxsaW5nIiwib25zdGF0ZWNoYW5nZSIsInN0YXRlIiwiY29udHJvbGxlciIsImNhdGNoIiwiZXJyb3IiLCJmZXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwiaGVhZGVycyIsImdldCIsImluZGV4T2YiLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQW9Cd0JBLFE7UUEwRlJDLFUsR0FBQUEsVTtBQTlHaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFNQyxjQUFjQyxRQUNsQkMsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsS0FBNkIsV0FBN0I7QUFDRTtBQUNBRixPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixLQUE2QixPQUYvQjtBQUdFO0FBQ0FGLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxLQUF6QixDQUNFLHdEQURGLENBTGdCLENBQXBCOztBQVVlLFNBQVNQLFFBQVQsR0FBb0I7QUFDakMsTUFBSVEsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXpCLElBQXlDLG1CQUFtQkMsU0FBaEUsRUFBMkU7QUFDekU7QUFDQSxRQUFNQyxZQUFZLElBQUlDLEdBQUosQ0FBUUwsUUFBUUMsR0FBUixDQUFZSyxVQUFwQixFQUFnQ1YsT0FBT0MsUUFBdkMsQ0FBbEI7QUFDQSxRQUFJTyxVQUFVRyxNQUFWLEtBQXFCWCxPQUFPQyxRQUFQLENBQWdCVSxNQUF6QyxFQUFpRDtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVEWCxXQUFPWSxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ3BDLFVBQU1DLFFBQVdULFFBQVFDLEdBQVIsQ0FBWUssVUFBdkIsdUJBQU47O0FBRUEsVUFBSVosV0FBSixFQUFpQjtBQUNmO0FBQ0FnQixnQ0FBd0JELEtBQXhCOztBQUVBO0FBQ0E7QUFDQU4sa0JBQVVRLGFBQVYsQ0FBd0JDLEtBQXhCLENBQThCQyxJQUE5QixDQUFtQyxZQUFNO0FBQ3ZDQyxrQkFBUUMsR0FBUixDQUNFLDJEQUNFLG9EQUZKO0FBSUQsU0FMRDtBQU1ELE9BWkQsTUFZTztBQUNMO0FBQ0FDLHdCQUFnQlAsS0FBaEI7QUFDRDtBQUNGLEtBbkJEO0FBb0JEO0FBQ0Y7O0FBRUQsU0FBU08sZUFBVCxDQUF5QlAsS0FBekIsRUFBZ0M7QUFDOUJOLFlBQVVRLGFBQVYsQ0FDR25CLFFBREgsQ0FDWWlCLEtBRFosRUFFR0ksSUFGSCxDQUVRLHdCQUFnQjtBQUNwQkksaUJBQWFDLGFBQWIsR0FBNkIsWUFBTTtBQUNqQyxVQUFNQyxtQkFBbUJGLGFBQWFHLFVBQXRDO0FBQ0FELHVCQUFpQkUsYUFBakIsR0FBaUMsWUFBTTtBQUNyQyxZQUFJRixpQkFBaUJHLEtBQWpCLEtBQTJCLFdBQS9CLEVBQTRDO0FBQzFDLGNBQUluQixVQUFVUSxhQUFWLENBQXdCWSxVQUE1QixFQUF3QztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBVCxvQkFBUUMsR0FBUixDQUFZLDJDQUFaO0FBQ0QsV0FORCxNQU1PO0FBQ0w7QUFDQTtBQUNBO0FBQ0FELG9CQUFRQyxHQUFSLENBQVksb0NBQVo7QUFDRDtBQUNGO0FBQ0YsT0FmRDtBQWdCRCxLQWxCRDtBQW1CRCxHQXRCSCxFQXVCR1MsS0F2QkgsQ0F1QlMsaUJBQVM7QUFDZFYsWUFBUVcsS0FBUixDQUFjLDJDQUFkLEVBQTJEQSxLQUEzRDtBQUNELEdBekJIO0FBMEJEOztBQUVELFNBQVNmLHVCQUFULENBQWlDRCxLQUFqQyxFQUF3QztBQUN0QztBQUNBaUIsUUFBTWpCLEtBQU4sRUFDR0ksSUFESCxDQUNRLG9CQUFZO0FBQ2hCO0FBQ0EsUUFDRWMsU0FBU0MsTUFBVCxLQUFvQixHQUFwQixJQUNBRCxTQUFTRSxPQUFULENBQWlCQyxHQUFqQixDQUFxQixjQUFyQixFQUFxQ0MsT0FBckMsQ0FBNkMsWUFBN0MsTUFBK0QsQ0FBQyxDQUZsRSxFQUdFO0FBQ0E7QUFDQTVCLGdCQUFVUSxhQUFWLENBQXdCQyxLQUF4QixDQUE4QkMsSUFBOUIsQ0FBbUMsd0JBQWdCO0FBQ2pESSxxQkFBYXhCLFVBQWIsR0FBMEJvQixJQUExQixDQUErQixZQUFNO0FBQ25DakIsaUJBQU9DLFFBQVAsQ0FBZ0JtQyxNQUFoQjtBQUNELFNBRkQ7QUFHRCxPQUpEO0FBS0QsS0FWRCxNQVVPO0FBQ0w7QUFDQWhCLHNCQUFnQlAsS0FBaEI7QUFDRDtBQUNGLEdBakJILEVBa0JHZSxLQWxCSCxDQWtCUyxZQUFNO0FBQ1hWLFlBQVFDLEdBQVIsQ0FDRSwrREFERjtBQUdELEdBdEJIO0FBdUJEOztBQUVNLFNBQVN0QixVQUFULEdBQXNCO0FBQzNCLE1BQUksbUJBQW1CVSxTQUF2QixFQUFrQztBQUNoQ0EsY0FBVVEsYUFBVixDQUF3QkMsS0FBeEIsQ0FBOEJDLElBQTlCLENBQW1DLHdCQUFnQjtBQUNqREksbUJBQWF4QixVQUFiO0FBQ0QsS0FGRDtBQUdEO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW4gcHJvZHVjdGlvbiwgd2UgcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlciB0byBzZXJ2ZSBhc3NldHMgZnJvbSBsb2NhbCBjYWNoZS5cblxuLy8gVGhpcyBsZXRzIHRoZSBhcHAgbG9hZCBmYXN0ZXIgb24gc3Vic2VxdWVudCB2aXNpdHMgaW4gcHJvZHVjdGlvbiwgYW5kIGdpdmVzXG4vLyBpdCBvZmZsaW5lIGNhcGFiaWxpdGllcy4gSG93ZXZlciwgaXQgYWxzbyBtZWFucyB0aGF0IGRldmVsb3BlcnMgKGFuZCB1c2Vycylcbi8vIHdpbGwgb25seSBzZWUgZGVwbG95ZWQgdXBkYXRlcyBvbiB0aGUgXCJOKzFcIiB2aXNpdCB0byBhIHBhZ2UsIHNpbmNlIHByZXZpb3VzbHlcbi8vIGNhY2hlZCByZXNvdXJjZXMgYXJlIHVwZGF0ZWQgaW4gdGhlIGJhY2tncm91bmQuXG5cbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGJlbmVmaXRzIG9mIHRoaXMgbW9kZWwsIHJlYWQgaHR0cHM6Ly9nb28uZ2wvS3d2RE55LlxuLy8gVGhpcyBsaW5rIGFsc28gaW5jbHVkZXMgaW5zdHJ1Y3Rpb25zIG9uIG9wdGluZyBvdXQgb2YgdGhpcyBiZWhhdmlvci5cblxuY29uc3QgaXNMb2NhbGhvc3QgPSBCb29sZWFuKFxuICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnIHx8XG4gICAgLy8gWzo6MV0gaXMgdGhlIElQdjYgbG9jYWxob3N0IGFkZHJlc3MuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnWzo6MV0nIHx8XG4gICAgLy8gMTI3LjAuMC4xLzggaXMgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKFxuICAgICAgL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvXG4gICAgKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAvLyBUaGUgVVJMIGNvbnN0cnVjdG9yIGlzIGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IFNXLlxuICAgIGNvbnN0IHB1YmxpY1VybCA9IG5ldyBVUkwocHJvY2Vzcy5lbnYuUFVCTElDX1VSTCwgd2luZG93LmxvY2F0aW9uKTtcbiAgICBpZiAocHVibGljVXJsLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgLy8gT3VyIHNlcnZpY2Ugd29ya2VyIHdvbid0IHdvcmsgaWYgUFVCTElDX1VSTCBpcyBvbiBhIGRpZmZlcmVudCBvcmlnaW5cbiAgICAgIC8vIGZyb20gd2hhdCBvdXIgcGFnZSBpcyBzZXJ2ZWQgb24uIFRoaXMgbWlnaHQgaGFwcGVuIGlmIGEgQ0ROIGlzIHVzZWQgdG9cbiAgICAgIC8vIHNlcnZlIGFzc2V0czsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9va2luY3ViYXRvci9jcmVhdGUtcmVhY3QtYXBwL2lzc3Vlcy8yMzc0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzd1VybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3NlcnZpY2Utd29ya2VyLmpzYDtcblxuICAgICAgaWYgKGlzTG9jYWxob3N0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgcnVubmluZyBvbiBsb2NhbGhvc3QuIExldHMgY2hlY2sgaWYgYSBzZXJ2aWNlIHdvcmtlciBzdGlsbCBleGlzdHMgb3Igbm90LlxuICAgICAgICBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybCk7XG5cbiAgICAgICAgLy8gQWRkIHNvbWUgYWRkaXRpb25hbCBsb2dnaW5nIHRvIGxvY2FsaG9zdCwgcG9pbnRpbmcgZGV2ZWxvcGVycyB0byB0aGVcbiAgICAgICAgLy8gc2VydmljZSB3b3JrZXIvUFdBIGRvY3VtZW50YXRpb24uXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgJ1RoaXMgd2ViIGFwcCBpcyBiZWluZyBzZXJ2ZWQgY2FjaGUtZmlyc3QgYnkgYSBzZXJ2aWNlICcgK1xuICAgICAgICAgICAgICAnd29ya2VyLiBUbyBsZWFybiBtb3JlLCB2aXNpdCBodHRwczovL2dvby5nbC9TQzdjZ1EnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJcyBub3QgbG9jYWwgaG9zdC4gSnVzdCByZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCkge1xuICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgIC5yZWdpc3Rlcihzd1VybClcbiAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLm9udXBkYXRlZm91bmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbGxpbmdXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZztcbiAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlID09PSAnaW5zdGFsbGVkJykge1xuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIG9sZCBjb250ZW50IHdpbGwgaGF2ZSBiZWVuIHB1cmdlZCBhbmRcbiAgICAgICAgICAgICAgLy8gdGhlIGZyZXNoIGNvbnRlbnQgd2lsbCBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGNhY2hlLlxuICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBwZXJmZWN0IHRpbWUgdG8gZGlzcGxheSBhIFwiTmV3IGNvbnRlbnQgaXNcbiAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlOyBwbGVhc2UgcmVmcmVzaC5cIiBtZXNzYWdlIGluIHlvdXIgd2ViIGFwcC5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZTsgcGxlYXNlIHJlZnJlc2guJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCBldmVyeXRoaW5nIGhhcyBiZWVuIHByZWNhY2hlZC5cbiAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYVxuICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS5cIiBtZXNzYWdlLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsKSB7XG4gIC8vIENoZWNrIGlmIHRoZSBzZXJ2aWNlIHdvcmtlciBjYW4gYmUgZm91bmQuIElmIGl0IGNhbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgZmV0Y2goc3dVcmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cbiAgICAgIGlmIChcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgfHxcbiAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpLmluZGV4T2YoJ2phdmFzY3JpcHQnKSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICAvLyBObyBzZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvYmFibHkgYSBkaWZmZXJlbnQgYXBwLiBSZWxvYWQgdGhlIHBhZ2UuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9jZWVkIGFzIG5vcm1hbC5cbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ05vIGludGVybmV0IGNvbm5lY3Rpb24gZm91bmQuIEFwcCBpcyBydW5uaW5nIGluIG9mZmxpbmUgbW9kZS4nXG4gICAgICApO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlcigpIHtcbiAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=