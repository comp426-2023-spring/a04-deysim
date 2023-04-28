#!/usr/bin/env node

import express from "express"
import minimist from "minimist"
import {rps,rpsls} from "./lib/rpsls.js"

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('*', (req, res) => {
	res.status(404).send('404 NOT FOUND');
})

//check endpoint at /app/ that returns 200 OK
app.get('/app/', (rep, res) => {
	res.status(200).send("200 OK")
})

//Endpoint /app/rps/ that returns {"player":"(rock|paper|scissors)"}
app.get('/app/rps/', (req, res) => {
	res.status(200).send(JSON.stringify(rps()));
})

//Endpoint /app/rpsls/ that returns {"player":"(rock|paper|scissors|lizard|spock)"}
app.get('/app/rpsls/', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls()));
})

//Endpoint /app/rps/play/ accepting request bodies
app.get('/app/rps/play/', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.query.shot)));
})

//Endpoint /app/rpsls/play/ accepting request bodies
app.get('/app/rpsls/play/', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
})


app.post('/app/rps/play/', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.body.shot)));
})

app.post('/app/rpsls/play/', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
})


//endpoint with url
app.get('/app/rps/play/:shot', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.params.shot)));
})

app.get('/app/rpsls/play/:shot', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
})


app.listen(port);



