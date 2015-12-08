
var importDoc = document.currentScript.ownerDocument;
if (!(document.createElement('link').hasOwnProperty('import'))) {
  importDoc = document._currentScript.ownerDocument;
}
var proto = Object.create(HTMLElement.prototype, {
  createdCallback: {
    value : function() {
      var template = importDoc.querySelector("#customElementTemplate");
      this.createShadowRoot().appendChild(document.importNode(template.content, true));
    }
  }
});
document.registerElement("custom-element", {prototype: proto});
