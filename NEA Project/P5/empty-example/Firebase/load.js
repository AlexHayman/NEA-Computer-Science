const canvasList = document.querySelector('#Links');
localStorage.removeItem('CanvasData');


function uploadCanvas(doc) {
    //Adding the links for the data
    let openLink = document.createElement('a');
    openLink.setAttribute('data-id', doc.id);
    openLink.setAttribute('href', "index.html#canvasDataLoad");
    openLink.innerHTML = doc.data().NameField;
    canvasList.appendChild(openLink);
    
    openLink.addEventListener('click', (e) => {
        //Getting all the necessary data when the user pressed the button
        // let id = e.target.getAttribute('data-id');
        let data = {};
        let currentLayerInfo = doc.data().CurrentLayerField;
        let visibilityInfo = doc.data().VisibilityField;
        data =  {
            currentLayerData: currentLayerInfo,
            visibilityData: visibilityInfo
        };
        for(var i=0; i < Object.keys(doc.data()).length - 3; i ++) {
            data["contentData" + i] = doc.data()["contentField" + i];
        }
        dataJSON = JSON.stringify(data);
        localStorage.setItem('CanvasData', dataJSON);
    });

}



db.collection('Canvases').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        uploadCanvas(doc);
    });
});