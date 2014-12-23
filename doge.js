function textNodesUnder(node) {
    var all = [];
    for (node = node.firstChild; node; node = node.nextSibling) {
        if (node.nodeType == 3) all.push(node);
        else all = all.concat(textNodesUnder(node));
    }
    return all;
}
allnodes = textNodesUnder(document);
for (var i in allnodes) {
    allnodes[i].nodeValue = "doge ";
}
