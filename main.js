const houses = [
    {
      id: 1,
      name: "Batman",
      house: "Gryffindor",
      color: "Red",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLoBRU25DRN0qMxrv1UqK9Xv56KM0DoB_Ow&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9C9_dVyCpzQckkJWE8o1A7ya8e7TlEL7jZg&usqp=CAU",
    },
    {
        id: 2,
        name: "Robin",
        house: "Gryffindor",
        color: "Red",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLoBRU25DRN0qMxrv1UqK9Xv56KM0DoB_Ow&usqp=CAU",
        imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwrYHrEZyPnR_opMQFUo3CQHgTAR92uX-2Q&usqp=CAU",
      },
      {
        id: 3,
        name: "Batgirl",
        house: "Gryffindor",
        color: "Red",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLoBRU25DRN0qMxrv1UqK9Xv56KM0DoB_Ow&usqp=CAU",
        imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWnrP3CmtI3JUQICSQ3YpH8gUFpuiou9EUQ&usqp=CAU",
      },
      {
        id: 4,
        name: "Cyborg",
        house: "Gryffindor",
        color: "Red",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLoBRU25DRN0qMxrv1UqK9Xv56KM0DoB_Ow&usqp=CAU",
        imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGUS3yQCo25vCP154shqbB4epT8cfrTjg7Q&usqp=CAU",
      },
    {
        id: 5,
      name: "Superman",
      house: "Hufflepuff",
      color: "Yellow",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmI6kmBSsaLRwEmAWCSVq8jFmX2tbQuJ53Q&usqp=CAU",
      imageUrl2: "https://static01.nyt.com/images/2021/04/23/multimedia/23blackhistory-gustines1/merlin_186389334_8b6f0e5f-5e6f-413a-b27d-10ba14e57a52-mobileMasterAt3x.jpg",
      },
      {
        id: 6,
      name: "Aquaman",
      house: "Hufflepuff",
      color: "Yellow",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmI6kmBSsaLRwEmAWCSVq8jFmX2tbQuJ53Q&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2G2jx0_93VpWunORzDyJQyUhB-IXjErTKxg&usqp=CAU",
      },
      {
        id: 7,
      name: "Green Lantern, John Stewart",
      house: "Hufflepuff",
      color: "Yellow",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmI6kmBSsaLRwEmAWCSVq8jFmX2tbQuJ53Q&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRypTi8RN5UZthO84647HpDY6iN2vCabWuQ&usqp=CAU",
      },
      {
        id: 8,
      name: "Green Arrow",
      house: "Hufflepuff",
      color: "Yellow",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmI6kmBSsaLRwEmAWCSVq8jFmX2tbQuJ53Q&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0jiV1jfGuXfRFLtSuiDqYdGGrOigmcfJ1g&usqp=CAU",
      },
      {
        id: 9,
      name: "Wonder Woman",
      house: "Ravenclaw",
      color: "Blue",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DXHDTLogYXCEJWz8FzqnVNO1sVHzpGCAg&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvJZOvnVUYuUA9DETTZrlswXBuL7dHsXrCw&usqp=CAU",
      },
      {
        id: 10,
      name: "The Joker",
      house: "Ravenclaw",
      color: "Blue",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DXHDTLogYXCEJWz8FzqnVNO1sVHzpGCAg&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yxsBmk_Elrj7embAKG3YFNTUIOVkIrIVaw&usqp=CAU",
      },
      {
        id: 11,
      name: "Cheetah",
      house: "Ravenclaw",
      color: "Blue",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DXHDTLogYXCEJWz8FzqnVNO1sVHzpGCAg&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxu0izOTK5sjL6z1x6oGVaQgaiqjANweIYEw&usqp=CAU",
      },
      {
        id: 12,
      name: "Bane",
      house: "Ravenclaw",
      color: "Blue",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DXHDTLogYXCEJWz8FzqnVNO1sVHzpGCAg&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_O7YgRLeB_9w-Iu6u1XNI6dUMWGF45vYjQ&usqp=CAU",
      },
      {
        id: 13,
      name: "The Flash",
      house: "Slytherin",
      color: "Green",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhrLyg3Hqk4x4HSc2s_8dpgCxv3Cyl2TJQw&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsIBg5ZnL5Q17TzprQ1KK6ytPySPGacEFJQ&usqp=CAU",
      },
      {
        id: 14,
      name: "Black Manta",
      house: "Slytherin",
      color: "Green",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhrLyg3Hqk4x4HSc2s_8dpgCxv3Cyl2TJQw&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtcA4eTzzA35Fky123pAu9RWa9U0DMG_YnQ&usqp=CAU",
      },
      {
        id: 15,
      name: "Captian Cold",
      house: "Slytherin",
      color: "Green",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhrLyg3Hqk4x4HSc2s_8dpgCxv3Cyl2TJQw&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pURtLc8589gDaYcBHWl0tk4F52VH-PPF3g&usqp=CAU",
      },
      {
        id: 16,
      name: "Deathstroke",
      house: "Slytherin",
      color: "Green",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhrLyg3Hqk4x4HSc2s_8dpgCxv3Cyl2TJQw&usqp=CAU",
      imageUrl2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lnFPZIjV9IrmpBl4O7BWodaNgUZJumYYvA&usqp=CAU",
      }

];

const voltHouse = [
    {
        id: 1,
      name: "Spider Man",
      house: "Volt",
      color: "Olive Green",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9mT0zMDlqZa1i4-xRjZtixZOD92PmjT_8A&usqp=CAU",
      imageUr2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74sOdSem3fUiq1uZTqh2TaSdrLGeFUR8aWA&usqp=CAU",
      }
] 


const renderToDom = (divId, htmlRender) => {
    const targetedDiv = document.querySelector(divId);
    targetedDiv.innerHTML = htmlRender
};
let html = "";

const cardsToDom = (array) => {
    let html = "";
    for (const house of array) {
        html += `<div style="width: 18rem;" class="card mb-3">
        <img src="${house.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Guess Who's in the HOUSE!! ${house.name} </h5>
          <img src="${house.imageUrl2}" class="card-img-top" alt="...">
          <p class="card-text">${house.name} is the newest member to be welcomed into our home.  They will get the same respect rather hero or villin. Ee will welcome them with open arms.  Everyone is a friend no one is as foe</p>
          <p class="card-text"><small class="text-muted">You are in the House of ${house.house}</small></p>
        </div>
        <button id="expell--${house.name}" class="btn btn-primary">Expell</button>
      </div>`

    }

    renderToDom("#myDiv", html)
};

const cardsToDom2 = (array1) => {
    let html2 = "";
    for (const volt of array1) {
        html += `<div style="width: 18rem;" class="card mb-3">
        <img src="${volt.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Guess Who's in the HOUSE!! ${volt.name} </h5>
          <p class="card-text">${volt.name} is the newest student to be expelled from Hogwarts.  This will be your last chance before you are expelled for seven life times. We will treat you fairly but strikes you now have none.  Welcome!/p>
          <p class="card-text"><small class="text-muted">You are in the House of ${volt.house}</small></p>
        </div>
      </div>`

    }

    renderToDom("#myDiv1", html2)
    console.log(renderToDom("#myDiv1", html2))
};



const studentDiv = (event) => { 
  if (event.target.studentId.includes("expell")) {
    const [, studentId] = event.target.studentId.split("--");
    const indexOfStudent = houses.findIndex(
      (volt) => Number.studentId === volt.id);
    const studentDiv = houses.splice(indexOfStudent, 1);
    voltHouse.push(studentDiv);
    cardsToDom(houses);
    cardsToDom2(studentDiv)
  }
};




// const loadCards = document.querySelector("#loadCardButton");
// loadCards.addEventListener("click", () => {
//     cardsToDom(houses)

// })

// const array1 = ["Slytherin", "Hufflepuff", "Ravenclaw", "Gryffindor"];
// array1.sort();
// console.log(array1);
// Expecte


         const toggle = () => {
          let x = document.getElementById("myForm");
          if (x.style.display === "none") {
            x.style.display = "block";
           } else {
             x.style.display = "none";
          }
         };

        toggle()
        
const houseFilter = (array, homes) => {
    const houseArray = [];

    for (const housing of array) {
        if (housing.house === homes) {
            houseArray.push(housing);
        }    
    }

    return houseArray;
};

const AllHouses = document.querySelector('#All');
const HouseOfGryffindor = document.querySelector('#Gryffindor');
const HouseOfHufflepuff = document.querySelector('#Hufflepuff');
const HouseOfRavenclaw = document.querySelector('#Ravenclaw');
const HouseOfSlytherin = document.querySelector('#Slytherin');


AllHouses.addEventListener('click', () => {
    cardsToDom(houses);
  });
  
  HouseOfGryffindor.addEventListener('click', () => {
    const DaDors = houseFilter(houses, 'Gryffindor');
    cardsToDom(DaDors);
  });
  
  HouseOfHufflepuff.addEventListener('click', () => {
    const DaPuffs = houseFilter(houses, 'Hufflepuff');
    cardsToDom(DaPuffs);
  });
  
  HouseOfRavenclaw.addEventListener('click', () => {
    const DaClaws = houseFilter(houses, 'Ravenclaw');
    cardsToDom(DaClaws);
  });
  
  HouseOfSlytherin.addEventListener('click', () => {
    const DaRins = houseFilter(houses, 'Slytherin');
    cardsToDom(DaRins);
  });  


  const assignedHouse = () => {
    const random = Math.floor(Math.random() * 4);
    switch (random) {
      case 0:
       return 'RavenClaw';
       break;
      case 1:
        return 'Gryffindor';
        break;
     case 2: 
      return 'Hufflepuff';
      break;
      case 3:
        return 'Slytherin'
    
    }
  };

  let houseFun = assignedHouse
  


  const createStudent = (event) => {
    event.preventDefault();
    // grab the values from form
    const name = document.querySelector("#name");
    const house = document.querySelector("#house");
    const imageUrl = document.querySelector("#imageUrl");
    const imageUrl2 = document.querySelector("#imageUrl2");    
    const id = houses.length + 1;
    // Create an object from values
  
    const newStudent = {
      name: name.value,
      house: house.value,
      imageUrl: imageUrl.value,
      imageUrl2: imageUrl2.value,
      id: id.number,
      
    };
  
    // push to houses array
    houses.push(newStudent);
  
    // rerender new student
    cardsToDom(houses);
  };


const submitButton = document.querySelector("#addStudent");
 submitButton.addEventListener("click", createStudent);

const startDom = () => {
  cardsToDom(houses);
};

startDom();



const startApp = () => {
  cardsToDom(houses);
};

startApp();

  
  
  
            
  





