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

    


    let TroisDiv3 = document.createElement('div');
    sJS.append(TroisDiv3)
    TroisDiv3.classList.add('tresmuntros');
    TroisDiv3.classList.add('watchJs1');
    TroisDiv3.innerHTML = '<p class="M-T" class="fontJs">Thermo Ball Etip Gloves</p>'
    


    
    
    let TroisDiv2 = document.createElement('div');
    sJS.append(TroisDiv2);
    TroisDiv2.classList.add('tresmuntros');
    TroisDiv2.classList.add('watchJs2');


    let TroisDiv1 = document.createElement('div');
    sJS.append(TroisDiv1);
    TroisDiv1.classList.add('tresmuntros');
    TroisDiv1.classList.add('watchJs3');
    
    section2.append(TroisDiv3)
    section2.append(TroisDiv2)
    section2.append(TroisDiv1)
