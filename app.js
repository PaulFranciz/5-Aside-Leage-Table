// Function to update the team statistics in the table
function updateTeamStats(
  teamId,
  matchesPlayed,
  wins,
  draws,
  losses,
  goals,
  points
) {
  document.getElementById(`matches-played${teamId}`).textContent =
    matchesPlayed;
  document.getElementById(`wins${teamId}`).textContent = wins;
  document.getElementById(`draws${teamId}`).textContent = draws;
  document.getElementById(`losses${teamId}`).textContent = losses;
  document.getElementById(`goals${teamId}`).textContent = goals;
  document.getElementById(`points${teamId}`).textContent = points;
}

// Example usage to update team statistics
function update() {
  // Update statistics for Team 1
  updateTeamStats(1, 0, 0, 0, 0, 0, 0);

  // Update statistics for Team 2
  updateTeamStats(2, 0, 0, 0, 0, 0, 0);

  // Update statistics for Team 3
  updateTeamStats(3, 0, 0, 0, 0, 0, 0);

  // Update statistics for Team 4
  updateTeamStats(4, 0, 0, 0, 0, 0, 0);
}

// Call the update function to see the changes in the table
update();

// Team data
const teams = [
  {
    name: "Brentford",
    players: [
      "Oscar",
      "Woss",
      "Julius",
      "Valash",
      "Unity",
      "Victory",
      "Justin",
      "Inyene",
      "Sylvester",
    ],
  },
  {
    name: "Eyimba",
    players: [
      "Roland",
      "Ifeoluwa",
      "Daniel",
      "King David",
      "Ben Carson",
      "Myke Anthony",
      "Don Visky",
      "Samuel",
      "Oscar ox",
    ],
  },
  {
    name: "Barcelona",
    players: [
      "Pele",
      "Eby Best",
      "Paul",
      "Anara",
      "Kingsley",
      "Lucky",
      "Godwin",
      "Michael",
      "Phyevor",
    ],
  },
  {
    name: "Ajax",
    players: [
      "Oriba",
      "Black",
      "Smart",
      "Omini",
      "Madukwe",
      "Rapulu",
      "Williams",
      "John Greg",
      "Apostle Paul",
    ],
  },
];

// Generate team list
const teamList = document.getElementById("team-list");

teams.forEach((team) => {
  const teamElement = document.createElement("div");
  teamElement.classList.add("team");

  const teamName = document.createElement("h2");
  teamName.classList.add("team-name");
  teamName.textContent = team.name;

  const playerList = document.createElement("ul");
  playerList.classList.add("player-list");

  team.players.forEach((player) => {
    const playerItem = document.createElement("li");
    playerItem.classList.add("player");
    playerItem.textContent = player;

    playerList.appendChild(playerItem);
  });

  teamElement.appendChild(teamName);
  teamElement.appendChild(playerList);

  teamList.appendChild(teamElement);
});
