let pages = {
    'home' : `Welcome to XYZ Company. This is our home page!<br/><br/><img src='media/animals.jpeg'/>`,
    'aboutus' : `Our About Us page<br/><br/><img src='media/people.jpeg' />`,
    'services' : `Our Services page<br/><br/><img src='media/tech.jpeg' />`,
    'contact' : `Our Contact Us page<br/><br/><img src='media/arch.jpeg' />`
};

function getPageContent(page){
    let contentToReturn;
    switch(page){
        case 'home':
            contentToReturn = pages.home;
            break;
        case 'aboutus':
            contentToReturn = pages.aboutus;
            break;
        case 'services':
            contentToReturn = pages.services;
            break;
        case 'contact':
            contentToReturn = pages.contact;
            break;
        default:
            contentToReturn = pages.home;
            break;				
    }
    document.getElementById('content').innerHTML = contentToReturn; 
}