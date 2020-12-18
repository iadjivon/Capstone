

const width = 700;
const height = 700;

const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'map');

const projection = d3.geoMercator()
    .scale(400)
    // .center("center")
    .translate([width / 2.7, height / 2]);
const path = d3.geoPath(projection);

const g = svg.append('g')
.attr('class', 'geo');

d3.json('africa.json')
    .then(data => { console.log(data)

        const countries = topojson.feature(data, data.objects.collection);
       
     g.selectAll('path')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', path);

    });
