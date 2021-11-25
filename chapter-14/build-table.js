`<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];`

const iterator = object => {
  	const div = document.getElementById("mountains");
  	const table = document.createElement('table');
  	div.appendChild(table)
	for (let i = 0; i < object.length; i++) {
      const tr = document.createElement('tr');
      const thName = document.createElement('td');
      const thHeight = document.createElement('td');
      const thPlace = document.createElement('td');
      thName.style.textAlign = "right";
      thHeight.style.textAlign = "right";
      thPlace.style.textAlign = "right";
      tr.appendChild(thName);
      tr.appendChild(thHeight);
      tr.appendChild(thPlace);
      div.appendChild(tr)
      thName.textContent = object[i].name;
      thHeight.textContent = object[i].height;
      thPlace.textContent = object[i].place;
    }
}
iterator(MOUNTAINS);
`</script>`