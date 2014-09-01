jQuery.fn.searchByNameOrId = function(nameOrId) {
    self = this;
    if (self.length == 0) {
        self = jQuery(document);
    }
    console.log(self);
    if (self.find("#" + nameOrId).length > 0) {
        return self.find("#" + nameOrId);
    } else if (self.find("[name=" + nameOrId + "]").length > 0) {
        return self.find("[name=" + nameOrId + "]");
    } else {
        return jQuery();
    }
};
