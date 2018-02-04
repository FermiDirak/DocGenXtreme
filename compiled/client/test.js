"use strict";

var async = require("async"),
    // async module
request = require("request"),
    // request module
fs = require("fs"); // fs module

var email = "paolo.z.roxas@gmail.com",
    // your account email
password = "4dndkw97",
    // your account password
integratorKey = "63a720bf-4c75-4b42-8502-280594e250d7",
    // your Integrator Key (found on the Preferences -> API page)
recipientName = "bubba",
    // recipient (signer) name
documentName = "doc.pdf",
    // copy document with this name into same directory!
baseUrl = ""; // we will retrieve this through the Login call

async.waterfall([
/////////////////////////////////////////////////////////////////////////////////////
// Step 1: Login (used to retrieve your accountId and baseUrl)
/////////////////////////////////////////////////////////////////////////////////////
function (next) {
  var url = "https://demo.docusign.net/restapi/v2/login_information";
  var body = ""; // no request body for login api call

  // set request url, method, body, and headers
  var options = initializeRequest(url, "GET", body, email, password);

  // send the request...
  request(options, function (err, res, body) {
    if (!parseResponseBody(err, res, body)) {
      return;
    }
    baseUrl = JSON.parse(body).loginAccounts[0].baseUrl;
    next(null); // call next function
  });
},

/////////////////////////////////////////////////////////////////////////////////////
// Step 2: Request Signature on a PDF Document
/////////////////////////////////////////////////////////////////////////////////////
function (next) {
  var url = baseUrl + "/envelopes";
  // following request body will place 1 signature tab 100 pixels to the right and
  // 100 pixels down from the top left of the document that you send in the request
  var body = {
    "recipients": {
      "signers": [{
        "email": email,
        "name": recipientName,
        "recipientId": 1,
        "tabs": {
          "signHereTabs": [{
            "xPosition": "100",
            "yPosition": "100",
            "documentId": "1",
            "pageNumber": "1"
          }]
        }
      }]
    },
    "emailSubject": 'DocuSign API - Signature Request on Document Call',
    "documents": [{
      "name": documentName,
      "documentId": 1
    }],
    "status": "sent"
  };

  // set request url, method, body, and headers
  var options = initializeRequest(url, "POST", body, email, password);

  // change default Content-Type header from "application/json" to "multipart/form-data"
  options.headers["Content-Type"] = "multipart/form-data";

  // configure a multipart http request with JSON body and document bytes
  options.multipart = [{
    "Content-Type": "application/json",
    "Content-Disposition": "form-data",
    "body": JSON.stringify(body)
  }, {
    "Content-Type": "application/pdf",
    'Content-Disposition': 'file; filename="' + documentName + '"; documentId=1',
    "body": fs.readFileSync(documentName)
  }];

  // send the request...
  request(options, function (err, res, body) {
    parseResponseBody(err, res, body);
  });
} // end function    
]);

//***********************************************************************************************
// --- HELPER FUNCTIONS ---
//***********************************************************************************************
function initializeRequest(url, method, body, email, password) {
  var options = {
    "method": method,
    "uri": url,
    "body": body,
    "headers": {}
  };
  addRequestHeaders(options, email, password);
  return options;
}

///////////////////////////////////////////////////////////////////////////////////////////////
function addRequestHeaders(options, email, password) {
  // JSON formatted authentication header (XML format allowed as well)
  dsAuthHeader = JSON.stringify({
    "Username": email,
    "Password": password,
    "IntegratorKey": integratorKey // global
  });
  // DocuSign authorization header
  options.headers["X-DocuSign-Authentication"] = dsAuthHeader;
}

///////////////////////////////////////////////////////////////////////////////////////////////
function parseResponseBody(err, res, body) {
  console.log("\r\nAPI Call Result: \r\n", JSON.parse(body));
  if (res.statusCode != 200 && res.statusCode != 201) {
    // success statuses
    console.log("Error calling webservice, status is: ", res.statusCode);
    console.log("\r\n", err);
    return false;
  }
  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC90ZXN0LmpzIl0sIm5hbWVzIjpbImFzeW5jIiwicmVxdWlyZSIsInJlcXVlc3QiLCJmcyIsImVtYWlsIiwicGFzc3dvcmQiLCJpbnRlZ3JhdG9yS2V5IiwicmVjaXBpZW50TmFtZSIsImRvY3VtZW50TmFtZSIsImJhc2VVcmwiLCJ3YXRlcmZhbGwiLCJuZXh0IiwidXJsIiwiYm9keSIsIm9wdGlvbnMiLCJpbml0aWFsaXplUmVxdWVzdCIsImVyciIsInJlcyIsInBhcnNlUmVzcG9uc2VCb2R5IiwiSlNPTiIsInBhcnNlIiwibG9naW5BY2NvdW50cyIsImhlYWRlcnMiLCJtdWx0aXBhcnQiLCJzdHJpbmdpZnkiLCJyZWFkRmlsZVN5bmMiLCJtZXRob2QiLCJhZGRSZXF1ZXN0SGVhZGVycyIsImRzQXV0aEhlYWRlciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQVFBLFFBQVFDLFFBQVEsT0FBUixDQUFoQjtBQUFBLElBQW9DO0FBQzVCQyxVQUFVRCxRQUFRLFNBQVIsQ0FEbEI7QUFBQSxJQUN3QztBQUNsQ0UsS0FBS0YsUUFBUSxJQUFSLENBRlgsQyxDQUU4Qjs7QUFFOUIsSUFBTUcsUUFBUSx5QkFBZDtBQUFBLElBQWdEO0FBQzFDQyxXQUFXLFVBRGpCO0FBQUEsSUFDaUM7QUFDM0JDLGdCQUFnQixzQ0FGdEI7QUFBQSxJQUVtRTtBQUMvREMsZ0JBQWdCLE9BSHBCO0FBQUEsSUFHa0M7QUFDNUJDLGVBQWUsU0FKckI7QUFBQSxJQUlvQztBQUM5QkMsVUFBVSxFQUxoQixDLENBSzRCOztBQUU1QlQsTUFBTVUsU0FBTixDQUNFO0FBQ0U7QUFDQTtBQUNBO0FBQ0EsVUFBU0MsSUFBVCxFQUFlO0FBQ2YsTUFBSUMsTUFBTSx3REFBVjtBQUNBLE1BQUlDLE9BQU8sRUFBWCxDQUZlLENBRUM7O0FBRWhCO0FBQ0EsTUFBSUMsVUFBVUMsa0JBQWtCSCxHQUFsQixFQUF1QixLQUF2QixFQUE4QkMs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QVIsQ0FBWSwyQkFBWixFQUF5Q1gsS0FBS0MsS0FBTCxDQUFXUCxJQUFYLENBQXpDO0FBQ0EsTUFBSUksSUFBSWMsVUFBSixJQUFrQixHQUFsQixJQUF5QmQsSUFBSWMsVUFBSixJQUFrQixHQUEvQyxFQUFvRDtBQUFFO0FBQ3BERixZQUFRQyxHQUFSLENBQVksdUNBQVosRUFBcURiLElBQUljLFVBQXpEO0FBQ0FGLFlBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CZCxHQUFwQjtBQUNBLFdBQU8sS0FBUDtBQUNEO0FBQ0QsU0FBTyxJQUFQO0FBQ0QiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAgICAgYXN5bmMgPSByZXF1aXJlKFwiYXN5bmNcIiksICAgLy8gYXN5bmMgbW9kdWxlXG4gICAgICAgIHJlcXVlc3QgPSByZXF1aXJlKFwicmVxdWVzdFwiKSwgICAvLyByZXF1ZXN0IG1vZHVsZVxuICAgICAgZnMgPSByZXF1aXJlKFwiZnNcIik7ICAgICAvLyBmcyBtb2R1bGVcblxudmFyICAgZW1haWwgPSBcInBhb2xvLnoucm94YXNAZ21haWwuY29tXCIsICAgICAgICAvLyB5b3VyIGFjY291bnQgZW1haWxcbiAgICAgIHBhc3N3b3JkID0gXCI0ZG5ka3c5N1wiLCAgICAgLy8geW91ciBhY2NvdW50IHBhc3N3b3JkXG4gICAgICBpbnRlZ3JhdG9yS2V5ID0gXCI2M2E3MjBiZi00Yzc1LTRiNDItODUwMi0yODA1OTRlMjUwZDdcIiwgICAgICAvLyB5b3VyIEludGVncmF0b3IgS2V5IChmb3VuZCBvbiB0aGUgUHJlZmVyZW5jZXMgLT4gQVBJIHBhZ2UpXG4gICAgcmVjaXBpZW50TmFtZSA9IFwiYnViYmFcIiwgICAgICAvLyByZWNpcGllbnQgKHNpZ25lcikgbmFtZVxuICAgICAgZG9jdW1lbnROYW1lID0gXCJkb2MucGRmXCIsICAgICAvLyBjb3B5IGRvY3VtZW50IHdpdGggdGhpcyBuYW1lIGludG8gc2FtZSBkaXJlY3RvcnkhXG4gICAgICBiYXNlVXJsID0gXCJcIjsgICAgICAgICAvLyB3ZSB3aWxsIHJldHJpZXZlIHRoaXMgdGhyb3VnaCB0aGUgTG9naW4gY2FsbFxuXG5hc3luYy53YXRlcmZhbGwoXG4gIFtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gU3RlcCAxOiBMb2dpbiAodXNlZCB0byByZXRyaWV2ZSB5b3VyIGFjY291bnRJZCBhbmQgYmFzZVVybClcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgZnVuY3Rpb24obmV4dCkge1xuICAgIHZhciB1cmwgPSBcImh0dHBzOi8vZGVtby5kb2N1c2lnbi5uZXQvcmVzdGFwaS92Mi9sb2dpbl9pbmZvcm1hdGlvblwiO1xuICAgIHZhciBib2R5ID0gXCJcIjsgIC8vIG5vIHJlcXVlc3QgYm9keSBmb3IgbG9naW4gYXBpIGNhbGxcbiAgICBcbiAgICAvLyBzZXQgcmVxdWVzdCB1cmwsIG1ldGhvZCwgYm9keSwgYW5kIGhlYWRlcnNcbiAgICB2YXIgb3B0aW9ucyA9IGluaXRpYWxpemVSZXF1ZXN0KHVybCwgXCJHRVRcIiwgYm9keSwgZW1haWwsIHBhc3N3b3JkKTtcbiAgICBcbiAgICAvLyBzZW5kIHRoZSByZXF1ZXN0Li4uXG4gICAgcmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbihlcnIsIHJlcywgYm9keSkge1xuICAgICAgaWYoIXBhcnNlUmVzcG9uc2VCb2R5KGVyciwgcmVzLCBib2R5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBiYXNlVXJsID0gSlNPTi5wYXJzZShib2R5KS5sb2dpbkFjY291bnRzWzBdLmJhc2VVcmw7XG4gICAgICBuZXh0KG51bGwpOyAvLyBjYWxsIG5leHQgZnVuY3Rpb25cbiAgICB9KTtcbiAgfSxcbiAgICBcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gU3RlcCAyOiBSZXF1ZXN0IFNpZ25hdHVyZSBvbiBhIFBERiBEb2N1bWVudFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBmdW5jdGlvbihuZXh0KSB7ICAgIFxuICAgICAgdmFyIHVybCA9IGJhc2VVcmwgKyBcIi9lbnZlbG9wZXNcIjtcbiAgICAgIC8vIGZvbGxvd2luZyByZXF1ZXN0IGJvZHkgd2lsbCBwbGFjZSAxIHNpZ25hdHVyZSB0YWIgMTAwIHBpeGVscyB0byB0aGUgcmlnaHQgYW5kXG4gICAgICAvLyAxMDAgcGl4ZWxzIGRvd24gZnJvbSB0aGUgdG9wIGxlZnQgb2YgdGhlIGRvY3VtZW50IHRoYXQgeW91IHNlbmQgaW4gdGhlIHJlcXVlc3RcbiAgICB2YXIgYm9keSA9IHtcbiAgICAgIFwicmVjaXBpZW50c1wiOiB7XG4gICAgICAgIFwic2lnbmVyc1wiOiBbe1xuICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXG4gICAgICAgICAgXCJuYW1lXCI6IHJlY2lwaWVudE5hbWUsXG4gICAgICAgICAgXCJyZWNpcGllbnRJZFwiOiAxLFxuICAgICAgICAgIFwidGFic1wiOiB7XG4gICAgICAgICAgICBcInNpZ25IZXJlVGFic1wiOiBbe1xuICAgICAgICAgICAgICBcInhQb3NpdGlvblwiOiBcIjEwMFwiLFxuICAgICAgICAgICAgICBcInlQb3NpdGlvblwiOiBcIjEwMFwiLFxuICAgICAgICAgICAgICBcImRvY3VtZW50SWRcIjogXCIxXCIsXG4gICAgICAgICAgICAgIFwicGFnZU51bWJlclwiOiBcIjFcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICBcImVtYWlsU3ViamVjdFwiOiAnRG9jdVNpZ24gQVBJIC0gU2lnbmF0dXJlIFJlcXVlc3Qgb24gRG9jdW1lbnQgQ2FsbCcsXG4gICAgICBcImRvY3VtZW50c1wiOiBbe1xuICAgICAgICBcIm5hbWVcIjogZG9jdW1lbnROYW1lLFxuICAgICAgICBcImRvY3VtZW50SWRcIjogMSxcbiAgICAgIH1dLFxuICAgICAgXCJzdGF0dXNcIjogXCJzZW50XCIsXG4gICAgfTtcbiAgICBcbiAgICAvLyBzZXQgcmVxdWVzdCB1cmwsIG1ldGhvZCwgYm9keSwgYW5kIGhlYWRlcnNcbiAgICB2YXIgb3B0aW9ucyA9IGluaXRpYWxpemVSZXF1ZXN0KHVybCwgXCJQT1NUXCIsIGJvZHksIGVtYWlsLCBwYXNzd29yZCk7XG4gIFxuICAgIC8vIGNoYW5nZSBkZWZhdWx0IENvbnRlbnQtVHlwZSBoZWFkZXIgZnJvbSBcImFwcGxpY2F0aW9uL2pzb25cIiB0byBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiO1xuICAgIFxuICAgIC8vIGNvbmZpZ3VyZSBhIG11bHRpcGFydCBodHRwIHJlcXVlc3Qgd2l0aCBKU09OIGJvZHkgYW5kIGRvY3VtZW50IGJ5dGVzXG4gICAgb3B0aW9ucy5tdWx0aXBhcnQgPSBbe1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiQ29udGVudC1EaXNwb3NpdGlvblwiOiBcImZvcm0tZGF0YVwiLFxuICAgICAgICAgIFwiYm9keVwiOiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgfSwge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vcGRmXCIsXG4gICAgICAgICAgJ0NvbnRlbnQtRGlzcG9zaXRpb24nOiAnZmlsZTsgZmlsZW5hbWU9XCInICsgZG9jdW1lbnROYW1lICsgJ1wiOyBkb2N1bWVudElkPTEnLFxuICAgICAgICAgIFwiYm9keVwiOiBmcy5yZWFkRmlsZVN5bmMoZG9jdW1lbnROYW1lKSxcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBzZW5kIHRoZSByZXF1ZXN0Li4uXG4gICAgcmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbihlcnIsIHJlcywgYm9keSkge1xuICAgICAgcGFyc2VSZXNwb25zZUJvZHkoZXJyLCByZXMsIGJvZHkpO1xuICAgIH0pO1xuICB9IC8vIGVuZCBmdW5jdGlvbiAgICBcbl0pO1xuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAtLS0gSEVMUEVSIEZVTkNUSU9OUyAtLS1cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbmZ1bmN0aW9uIGluaXRpYWxpemVSZXF1ZXN0KHVybCwgbWV0aG9kLCBib2R5LCBlbWFpbCwgcGFzc3dvcmQpIHsgIFxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBcIm1ldGhvZFwiOiBtZXRob2QsXG4gICAgXCJ1cmlcIjogdXJsLFxuICAgIFwiYm9keVwiOiBib2R5LFxuICAgIFwiaGVhZGVyc1wiOiB7fVxuICB9O1xuICBhZGRSZXF1ZXN0SGVhZGVycyhvcHRpb25zLCBlbWFpbCwgcGFzc3dvcmQpO1xuICByZXR1cm4gb3B0aW9ucztcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmZ1bmN0aW9uIGFkZFJlcXVlc3RIZWFkZXJzKG9wdGlvbnMsIGVtYWlsLCBwYXNzd29yZCkgeyAgXG4gIC8vIEpTT04gZm9ybWF0dGVkIGF1dGhlbnRpY2F0aW9uIGhlYWRlciAoWE1MIGZvcm1hdCBhbGxvd2VkIGFzIHdlbGwpXG4gIGRzQXV0aEhlYWRlciA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBcIlVzZXJuYW1lXCI6IGVtYWlsLFxuICAgIFwiUGFzc3dvcmRcIjogcGFzc3dvcmQsIFxuICAgIFwiSW50ZWdyYXRvcktleVwiOiBpbnRlZ3JhdG9yS2V5ICAvLyBnbG9iYWxcbiAgfSk7XG4gIC8vIERvY3VTaWduIGF1dGhvcml6YXRpb24gaGVhZGVyXG4gIG9wdGlvbnMuaGVhZGVyc1tcIlgtRG9jdVNpZ24tQXV0aGVudGljYXRpb25cIl0gPSBkc0F1dGhIZWFkZXI7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5mdW5jdGlvbiBwYXJzZVJlc3BvbnNlQm9keShlcnIsIHJlcywgYm9keSkge1xuICBjb25zb2xlLmxvZyhcIlxcclxcbkFQSSBDYWxsIFJlc3VsdDogXFxyXFxuXCIsIEpTT04ucGFyc2UoYm9keSkpO1xuICBpZiggcmVzLnN0YXR1c0NvZGUgIT0gMjAwICYmIHJlcy5zdGF0dXNDb2RlICE9IDIwMSkgeyAvLyBzdWNjZXNzIHN0YXR1c2VzXG4gICAgY29uc29sZS5sb2coXCJFcnJvciBjYWxsaW5nIHdlYnNlcnZpY2UsIHN0YXR1cyBpczogXCIsIHJlcy5zdGF0dXNDb2RlKTtcbiAgICBjb25zb2xlLmxvZyhcIlxcclxcblwiLCBlcnIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0iXX0=