import {issue_vc, verify_vc, verify_vp} from './vc.js';
import { createRequire } from "module";

const require = createRequire(import.meta.url);

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json({ type: 'application/json' }))

app.listen('8000');

app.get('/health', function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.send()
  })

app.post('/credentials/issue', function (req, res) {
    res.setHeader("Content-Type", "application/json");
    let credential = req.body.credential;
    let options = req.body.options;
    let vc = {};
    let response = {
        verifiableCredential: vc
    };
    res.send(JSON.stringify(response))
  })

app.post('/credentials/verify', function (req, res) {
    res.setHeader("Content-Type", "application/json");
    let vc = req.body.verifiableCredential;
    let options = req.body.options;
    let verificationResponse = {};
    let response = verificationResponse;
    res.send(JSON.stringify(response))
})

app.post('/presentations/verify', function (req, res) {
    res.setHeader("Content-Type", "application/json");
    let vp = req.body.verifiablePresentation;
    let options = req.body.options;
    let verificationResponse = {};
    let response = verificationResponse;
    res.send(JSON.stringify(response))
    })

console.log(`Server is ready!`);
