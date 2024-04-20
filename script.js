// console.log("!hello")

let display = document.querySelector('.display');

let originalData;

async function fetchData(){
    try {
        let res = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');
        let finalRes = await res.json();
        let data = finalRes.data;
        // console.log(data)
        displayData(data)
    } catch (error) {
        alert('!SomeThing Went Wrong !Refresh Page')
    }
}

fetchData()

function displayData(data){
    display.innerHTML = ''
    data.forEach((e)=>{
        let div =  document.createElement('div');
        div.className = 'box';

        let id = document.createElement('p');
        id.innerText = 'Id:' + ' ' + e.id;

        let country = document.createElement('h4');
        country.innerText = 'Country:'+ " " + e.country;

        let rank = document.createElement('p');
        rank.innerText = 'Rank:' + ' ' + e.Rank;

        let population = document.createElement('p');
        population.innerText = 'Population: ' +  e.population;

        div.append(id, country, rank, population);
        display.append(div);

    })
}

// function applyFilter(){
//     let selectBtn = document.querySelector('#population-filter').value
//     let filteredData;

//     switch(selectBtn){
//         case 'small':
//             filteredData = originalData.filter(e => e.population < 1000000);
//             break;
//         case 'large':
//             filteredData = originalData.filter(e => e.population >= 1000000 && e.population > 10000000);
//             break;
//         default:
//             displayData(originalData); // Show all data
//             return;
//     }
//     displayData(filteredData)

// }

// selectBtn.addEventListener('change', applyFilter)


