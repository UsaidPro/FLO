define(["helpers"], function(helpers) {
  // Wrapper for AT&T M2X Collections API
  //
  // https://m2x.att.com/developer/documentation/v2/collections
    var Collections = function(client) {
        this.client = client;
    };

  // Retrieve the list of collections accessible by the authenticated API key that
  // meet the search criteria
  //
  // https://m2x.att.com/developer/documentation/v2/collections#List-collections
    Collections.prototype.list = function(params, callback, errorCallback) {
        if (typeof params === "function") {
            callback = params;
            errorCallback = callback;
            params = {};
        }

        return this.client.get("/collections", { qs: params || {} }, callback, errorCallback);
    };

    // Create a new collection
    //
    // https://m2x.att.com/developer/documentation/v2/collections#Create-Collection
    Collections.prototype.create = function(params, callback, errorCallback) {
        return this.client.post("/collections", {
            headers: { "Content-Type": "application/json" },
            params: params
        }, callback, errorCallback);
    };

    // Update a collection
    //
    // https://m2x.att.com/developer/documentation/v2/collections#Update-Collection-Details
    Collections.prototype.update = function(id, params, callback, errorCallback) {
        return this.client.put(helpers.url("/collections/{0}", id), {
            headers: { "Content-Type": "application/json" },
            params:  params
        }, callback, errorCallback);
    };

    // Return the details of the supplied collection
    //
    // https://m2x.att.com/developer/documentation/v2/collections#View-Collection-Details
    Collections.prototype.view = function(id, callback, errorCallback) {
        return this.client.get(helpers.url("/collections/{0}", id), callback, errorCallback);
    };

    // Return the metadata of the supplied collection
    //
    // Note that this method can return an empty value (response status
    // of 204) if the collection has no metadata defined.
    //
    // https://m2x.att.com/developer/documentation/v2/collections#Read-Collection-Metadata
    Collections.prototype.metadata = function(id, callback, errorCallback) {
        return this.client.get(helpers.url("/collections/{0}/metadata", id), callback, errorCallback);
    };

    // Update the metadata of the collection
    //
    // https://m2x.att.com/developer/documentation/v2/collections#Update-Collection-Metadata
    Collections.prototype.updateMetadata = function(id, params, callback, errorCallback) {
        return this.client.put(helpers.url("/collections/{0}/metadata", id),
            { params: params }, callback, errorCallback);
    };

    // Delete an existing collection
    //
    // https://m2x.att.com/developer/documentation/v2/collections#Delete-Collection
    Collections.prototype.deleteCollection = function(id, callback, errorCallback) {
        return this.client.del(helpers.url("/collections/{0}", id), callback, errorCallback);
    };

    return Collections;
});
