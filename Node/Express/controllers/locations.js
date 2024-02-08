const { response, request } = require("express");

const locationList = [
  {
    "id": 1,
    "name": "Earth (C-137)",
    "type": "Planet",
    "dimension": "Dimension C-137",
    "url": "https://rickandmortyapi.com/api/location/1",
    "created": "2017-11-10T12:42:04.162Z"
  },
  {
    "id": 2,
    "name": "Abadango",
    "type": "Cluster",
    "dimension": "unknown",
    "url": "https://rickandmortyapi.com/api/location/2",
    "created": "2017-11-10T13:06:38.182Z"
  },
  {
    "id": 3,
    "name": "Citadel of Ricks",
    "type": "Space station",
    "dimension": "unknown",
    "url": "https://rickandmortyapi.com/api/location/3",
    "created": "2017-11-10T13:08:13.191Z"
  },
  {
    "id": 4,
    "name": "Worldender's lair",
    "type": "Planet",
    "dimension": "unknown",
    "url": "https://rickandmortyapi.com/api/location/4",
    "created": "2017-11-10T13:08:20.569Z"
  },
  {
    "id": 5,
    "name": "Anatomy Park",
    "type": "Microverse",
    "dimension": "Dimension C-137",
    "url": "https://rickandmortyapi.com/api/location/5",
    "created": "2017-11-10T13:08:46.060Z"
  },
  {
    "id": 6,
    "name": "Interdimensional Cable",
    "type": "TV",
    "dimension": "unknown",
    "url": "https://rickandmortyapi.com/api/location/6",
    "created": "2017-11-10T13:09:09.102Z"
  },
  {
    "id": 7,
    "name": "Immortality Field Resort",
    "type": "Resort",
    "dimension": "unknown",
    "url": "https://rickandmortyapi.com/api/location/7",
    "created": "2017-11-10T13:09:17.136Z"
  },
  {
    "id": 8,
    "name": "Post-Apocalyptic Earth",
    "type": "Planet",
    "dimension": "Post-Apocalyptic Dimension",
    "url": "https://rickandmortyapi.com/api/location/8",
    "created": "2017-11-10T13:09:22.551Z"
  },
  {
    "id": 9,
    "name": "Purge Planet",
    "type": "Planet",
    "dimension": "Replacement Dimension",
    "url": "https://rickandmortyapi.com/api/location/9",
    "created": "2017-11-10T13:09:29.566Z"
  },
  {
    "id": 10,
    "name": "Venzenulon 7",
    "type": "Planet",
    "dimension": "unknown",
    "url": "https://rickandmortyapi.com/api/location/10",
    "created": "2017-11-18T11:21:51.643Z"
  },
  {
    "id": 11,
    "name": "Bepis 9",
    "type": "Planet",
    "dimension": "unknown",
    "url": "https://rickandmortyapi.com/api/location/11",
    "created": "2017-11-18T11:26:03.325Z"
  },
  {
    "id": 12,
    "name": "Cronenberg Earth",
    "type": "Planet",
    "dimension": "Cronenberg Dimension",
    "url": "https://rickandmortyapi.com/api/location/12",
    "created": "2017-11-18T11:29:27.857Z"
  },
  {
    "id": 13,
    "name": "Nuptia 4",
    "type": "Planet",
    "dimension": "unknown",
    "url": "https://rickandmortyapi.com/api/location/13",
    "created": "2017-11-18T11:30:29.780Z"
  },
  {
    "id": 14,
    "name": "Giant's Town",
    "type": "Fantasy town",
    "dimension": "Fantasy Dimension",
    "url": "https://rickandmortyapi.com/api/location/14",
    "created": "2017-11-18T11:31:15.248Z"
  },
  {
    "id": 15,
    "name": "Bird World",
    "type": "Planet",
    "dimension": "unknown",
    "url": "https://rickandmortyapi.com/api/location/15",
    "created": "2017-11-18T11:32:26.752Z"
  },
  {
    "id": 16,
    "name": "St. Gloopy Noops Hospital",
    "type": "Space station",
    "dimension": "unknown",
    "url": "https://rickandmortyapi.com/api/location/16",
    "created": "2017-11-18T11:43:20.075Z"
  },
  {
    "id": 17,
    "name": "Earth (5-126)",
    "type": "Planet",
    "dimension": "Dimension 5-126",
    "url": "https://rickandmortyapi.com/api/location/17",
    "created": "2017-11-18T11:41:08.486Z"
  }
];

  const getAllLocations = ( req = request, res = response ) => {
    res.status(200).json({
        locationList
    });
}

const getLocation = ( req = request, res = response ) => {
    const id = req.params.id;

    if(id > locationList.length || id < 0){
        res.status(400).json({
            result : "There is no spaceship with that id"
        });
    } else {
        res.status(200).json({
            result : locationList[id]
        });
    }
}

module.exports = { getAllLocations, getLocation};