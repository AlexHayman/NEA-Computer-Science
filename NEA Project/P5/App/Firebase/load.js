const canvasList = document.querySelector('#Links');
localStorage.removeItem('CanvasData'); //Removes the previous data in the localStorage before starting


function uploadCanvas(doc) {
    //Adding the links for the data
    let openLink = document.createElement('a');
    openLink.setAttribute('data-id', doc.id);
    openLink.setAttribute('href', "index.html#canvasDataLoad");
    openLink.innerHTML = doc.data().NameField;
    canvasList.appendChild(openLink);
    
    openLink.addEventListener('click', (e) => {
        //Getting all the necessary data when the user pressed the button
        let data = {};
        let currentLayerInfo = doc.data().CurrentLayerField;
        let visibilityInfo = doc.data().VisibilityField;
        data =  {
            currentLayerData: currentLayerInfo,
            visibilityData: visibilityInfo
        };
        for(var i=0; i < Object.keys(doc.data()).length - 3; i ++) {
            data["contentData" + i] = doc.data()["contentField" + i]; //Loops through the contentfield because there are many of them
        }
        dataJSON = JSON.stringify(data); //Changes the format so it can be formed
        localStorage.setItem('CanvasData', dataJSON); //Stores the data in the localStorage so it can be retrieved
    });

}



db.collection('Canvases').get().then((snapshot) => { //Gets all the data from the databse
    snapshot.docs.forEach(doc => {
        uploadCanvas(doc);
    });
});