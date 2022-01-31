import { rest } from 'msw'

// the docs describe a way to use these APIs
// right inside the test case too... good for
// if you want to override the defaults specified
// below with some test case-specific values
// look that up and integrate it into the
// individual tests

export const handlers = [
  rest.get('http://localhost:3000/artists.json', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(JSON.parse(`{
        "artists": [
          {
            "id": "1234567890",
            "name": "The Tragically Hip"
          }
        ]
      }`)),
    )
  }),
  rest.get('http://localhost:3000/records.json', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(JSON.parse(`{
        "records": [
          {
            "id": "1",
            "title": "Up To Here",
            "artistId": "1",
            "year": "1989"
          },
          {
            "id": "2",
            "title": "Saskadelphia",
            "artistId": "1",
            "year": "2021"
          },
          {
            "id": "3",
            "title": "McLaren Furnace Room",
            "artistId": "2",
            "year": "1992"
          },
          {
            "id": "4",
            "title": "In The Trees",
            "artistId": "2",
            "year": "1994"
          },
          {
            "id": "5",
            "title": "Beggar's Banquet",
            "artistId": "3",
            "year": "1968"
          },
          {
            "id": "6",
            "title": "Exile On Main Street",
            "artistId": "3",
            "year": "1972"
          },
          {
            "id": "7",
            "title": "Help!",
            "artistId": "4",
            "year": "1965"
          },
          {
            "id": "8",
            "title": "Let It Be",
            "artistId": "4",
            "year": "1970"
          },
          {
            "id": "9",
            "title": "Physical Graffiti",
            "artistId": "5",
            "year": "1975"
          },
          {
            "id": "10",
            "title": "Led Zeppelin",
            "artistId": "5",
            "year": "1969"
          }
        ]
      }`)),
    )
  }),

];