document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener("click", changeSceneToMatchHistory);
    getMatches();

    const toggleButtons = document.querySelectorAll('.statsButton');
    toggleButtons.forEach(button => {
      button.addEventListener('click', function () {
        const chartDiv = button.nextElementSibling;
        if (chartDiv) {
          chartDiv.classList.toggle('u-hiddenStats');
          const buttonText = chartDiv.classList.contains('u-hiddenStats') ? 'stats' : 'close';
          button.textContent = buttonText;
        }
      });
    });

    document.querySelector("#div2").classList.add("u-hidden");
    const matchHistory = [
        {matchId : 1 , teamData : [
            { member: 'KC ECARTERI', kills: 5, deaths: 9, assists: 15 },
            { member: 'Numlest', kills: 7, deaths: 8, assists: 20 },
            { member: 'Gnomez', kills: 16, deaths: 12, assists: 14 },
            { member: 'm0ret', kills: 17, deaths: 11, assists: 14 },
            { member: 'Muesli', kills: 5, deaths: 9, assists: 33 },
        ]},
        {matchId : 2 , teamData : [
            { member: 'LaggeLie', kills: 6, deaths: 2, assists: 23 },
            { member: 'Gnomez', kills: 11, deaths: 10, assists: 16 },
            { member: 'AntoneLe100', kills: 6, deaths: 12, assists: 15 },
            { member: 'BambusBjörn', kills: 2, deaths: 8, assists: 15 },
            { member: 'IchKnickDich', kills: 6, deaths: 9, assists: 10 },
        ]},
        {matchId : 3 , teamData : [
            { member: 'Marrrja', kills: 4, deaths: 2, assists: 6 },
            { member: 'ShipuMiJaja', kills: 13, deaths: 3, assists: 10 },
            { member: 'Gnomez', kills: 10, deaths: 4, assists: 5 },
            { member: 'Black Curse', kills: 6, deaths: 3, assists: 8 },
            { member: 'Lavanderbeast', kills: 4, deaths: 4, assists: 18 },
        ]},
        {matchId : 4 , teamData : [
            { member: 'Eragon', kills: 5, deaths: 9, assists: 1 },
            { member: 'NWK Zeleph', kills: 1, deaths: 7, assists: 6 },
            { member: 'MoonaryTiti', kills: 4, deaths: 11, assists: 0 },
            { member: 'Gnomez', kills: 1, deaths: 5, assists: 1 },
            { member: 'W oczku', kills: 3, deaths: 6, assists: 3 },
        ]},
        {matchId : 5 , teamData : [
            { member: 'Gnomez', kills: 3, deaths: 4, assists: 0 },
            { member: 'dummy', kills: 0, deaths: 2, assists: 2 },
            { member: 'MrToyce', kills: 1, deaths: 3, assists: 0 },
            { member: 'Be Fruit 29', kills: 0, deaths: 2, assists: 1 },
            { member: 'JustPewPew', kills: 2, deaths: 1, assists: 0 },
        ]}
    ];

    matchHistory.forEach(match => {
        const matchChartContainer = document.getElementById(`matchChart${match.matchId}`);
        const canvas = document.createElement('canvas');
        matchChartContainer.appendChild(canvas);
        createBarChart(canvas, match.teamData);
      });
});

function createBarChart(canvas, teamData) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: teamData.map(member => member.member),
        datasets: [
            { label: 'Kills', data: teamData.map(member => member.kills), backgroundColor: 'rgba(75, 192, 192, 1)' },
            { label: 'Deaths', data: teamData.map(member => member.deaths), backgroundColor: 'rgba(255, 99, 132, 1)' },
            { label: 'Assists', data: teamData.map(member => member.assists), backgroundColor: 'rgba(255, 206, 86, 1)' },
        ],
      },
      options: {
        scales: {
          x: { display: false,
            beginAtZero: true },
        },
        animation: {
            duration: 0
        }
      },
    });
  }

function changeSceneToMatchHistory() {
    console.log("changeSceneToMatchHistory");
    document.querySelector(".matches").classList.toggle("u-hidden");
    document.querySelector(".matches").classList.toggle("w3-animate-bottom");


};

function getMatches() {
    fetch("matches.json").then(response => response.json()).then(data => console.log(data));
}

