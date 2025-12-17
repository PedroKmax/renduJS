const API_URL= `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json`;



fetch(API_URL)
.then(response => response.json())
.then(data => {
    console.log(data.nomCommercial);
    console.log(data.avantagesClients);
    
    
    const hero = document.getElementById("hero");
    const avantages = document.getElementById("Avantages");
    const produits = document.getElementById("Produits");
    const produitscards = document.getElementById("produits-card")
    const section3 = document.getElementById("section3");



        const h1 = document.createElement("h1");
            h1.textContent = data.nomCommercial;
            hero.appendChild(h1);
 
            const para = document.createElement("p");
            para.textContent = data.phraseAccroche;
            hero.appendChild(para);
 
            const texteAppelAction = document.createElement("a");
            texteAppelAction.href = "";
            texteAppelAction.textContent = data.texteAppelAction;
            hero.appendChild(texteAppelAction);
 
 
 
           
            const h2 = document.createElement("h2");
            h2.textContent = "Avantages Clients";
            avantages.appendChild(h2);
 
            data.avantagesClients.forEach(element => {
                let listAvantage = document.createElement("div");
                listAvantage.textContent = element;
                avantages.appendChild(listAvantage);
 
            });
           
            const h3 =document.createElement("h3");
            titreH2.textContent = "produits";
            produits.appendChild(h3);
 
            data.produits.forEach(element => {
                
                let produitsCard = document.createElement("div");
 
                let produitsimg = document.createElement("img")
                produitsimg.src = element["image-url"];
 
                produitsCard.appendChild(produitsimg);
 
                let produitsName = document.createElement("h4");
                produitsName.textContent = element.nom;
 
                produitsCard.appendChild(produitsName);
 
                let produitsDescription = document.createElement("p")
                produitsDescription.textContent = element.description;
 
                produitsCard.appendChild(produitsDescription);
 
                produitscards.appendChild(produitsCard);
 

              
                });
 
            });



