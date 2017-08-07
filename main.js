console.log("whouwow");

let basicContainer = document.querySelector('.daBasicInfo')
let storyContainer = document.querySelector('.daStory')
let imageContainer = document.querySelector('.daImage')
let nameatTopContainer = document.querySelector('.myName')

let request = new XMLHttpRequest();
request.addEventListener("load", getInfo);
request.open('GET', 'https://api.github.com/users/colot-imposter');
request.send();

function getInfo() {
    let infoList = JSON.parse(this.responseText);
    let basicList = `
    <dt>Name: </dt>
    <dd>${infoList.name}</dd>
    <dt>UserName: </dt>
    <dd>${infoList.login}</dd>
    <dt>Email: </dt>
    <dd>${infoList.email}</dd>
    <dt>Company: </dt>
    <dd>${infoList.company}</dd>
    <dt>Website: </dt> <dd>${infoList.html_url}</dd>`

    basicContainer.innerHTML = basicList

    let storyList = '';
    storyList += `${infoList.bio}`
    storyContainer.innerHTML = storyList

    let imageList = '';
    imageList = `<img src='${infoList.avatar_url}'>`
    imageContainer.innerHTML = imageList;

    let nameatTop = '';
    nameatTop= `<h1>${infoList.name}</h1>`
    nameatTopContainer.innerHTML=nameatTop

    console.log(infoList)

}
