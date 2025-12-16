const API_URL= `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json`;



fetch(API_URL)
.then(response => response.json())
.then(data => {
    console.log(data.nomCommercial);
    console.log(data.avantagesClients);
    
    
    const hero = document.getElementById("hero");
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");

    let h1 = document.createElement("h1");
    h1.textContent = data.nomCommercial;
    hero.appendChild(h1);

    let p1 = document.createElement("p1");
    p1.textContent = data.phraseAccroche;
    section1.appendChild(p1);

    let a1 = document.createElement("a");
    a1.textContent = data.texteAppelAction;
    a1.href = "";
    section1.appendChild(a1);

    let h2 = document.createElement("h2")
    h2.textContent = data.avatangesClients;
    section2.appendChild(h2)

   
    
      data.avantagesClients.forEach(element => {
         console.log(element);
        const div = document.createElement("div");
        div.textContent = element;
        section2.appendChild(div);
      });

  });