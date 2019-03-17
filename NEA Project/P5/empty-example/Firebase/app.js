const form = document.querySelector('#Save');
console.log(form);

db.collection('Canvases').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    });
});



form.addEventListener('submit', (e) => {
    e.preventDefault();          
    console.log("ssd") ;                 
    db.collection('Canvases').add({
        contentField: Layers.content,
        CurrentLayerField: currentLayer,
        VisibilityField: Layers.Visibilty
    });
});