//& Section full JS 
    let sJS = document.querySelector('.Sjs');
    console.log(sJS)

    let SjsTitle = document.createElement('h1');

    SjsTitle.classList.add('fontJs');
    SjsTitle.textContent = 'New Arrivals';
    sJS.append(SjsTitle);

    let section2 = document.createElement('div');
    sJS.append(section2);
    section2.id = 'section2-container';

    let price = document.createElement('p');
    price.textContent = '$ 45,743'

    let productName = document.createElement('h3');
    productName.textContent = 'Thermo Ball Etip Gloves'

    let img1 = document.createElement('div');

    let TroisDiv3 = document.createElement('div');
    sJS.append(img1)
    img1.append(TroisDiv3);
    TroisDiv3.classList.add('tresmuntros');
    TroisDiv3.classList.add('watchJs1');
    
    img1.append(productName)
    img1.append(price)
    


    let img2 = document.createElement('div');
    
    let TroisDiv2 = document.createElement('div');
    sJS.append(TroisDiv2);
    img2.prepend(TroisDiv2);
    TroisDiv2.classList.add('tresmuntros');
    TroisDiv2.classList.add('watchJs2');


    img2.prepend(productName)
    img2.prepend(price)


    let img3 = document.createElement('div');
    
    let TroisDiv1 = document.createElement('div');

    sJS.append(TroisDiv1);
    img3.prepend(TroisDiv1);

    TroisDiv1.classList.add('tresmuntros');
    TroisDiv1.classList.add('watchJs3');

    
    img3.prepend(productName)
    img3.prepend(price)
    
    section2.append(TroisDiv3)
    section2.append(TroisDiv2)
    section2.append(TroisDiv1)
