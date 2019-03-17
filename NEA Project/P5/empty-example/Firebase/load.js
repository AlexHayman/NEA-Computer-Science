const canvasList = document.querySelector('#Links')


function uploadCanvas(doc) {
    let openLink = document.createElement('a')
    openLink.setAttribute('data-id', doc.id)
    openLink.setAttribute('href', "#");
    openLink.innerHTML = "Link";
    canvasList.appendChild(openLink)
    
    openLink.addEventListener('click', (e) => {
        let id = e.target.getAttribute('data-id');
        let currentLayerData = doc.data().CurrentLayerField;
        let visibilityData = doc.data().VisibilityField;
        console.log(currentLayerData)
        console.log(visibilityData)
    })
}






db.collection('Canvases').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        uploadCanvas(doc);
    });
});