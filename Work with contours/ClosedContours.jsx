if ( app.documents.length > 0 && app.activeDocument.pathItems.length > 0 ) {
doc = app.activeDocument;
for ( i = 0; i < doc.pathItems.length; i++ ) {
pathRef = doc.pathItems[i];
pathRef.closed = true;
}
}