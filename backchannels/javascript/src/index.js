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
    res.send(JSON.stringify({status: 'ok'}))
  })

app.post('/credentials/issue', function (req, res) {
    res.setHeader("Content-Type", "application/json");
    const verifiableCredential = issue_vc(
      credential=req.body.credential,
      options=req.body.options
    );
    res.send(JSON.stringify({verifiableCredential: verifiableCredential}))
  })

app.post('/credentials/verify', function (req, res) {
    res.setHeader("Content-Type", "application/json");
    const verificationResponse = verify_vc(
      vc=req.body.verifiableCredential,
      options=req.body.options
    );
    res.send(JSON.stringify(verificationResponse))
})

app.post('/presentations/verify', function (req, res) {
    res.setHeader("Content-Type", "application/json");
    const verificationResponse = verify_vp(
      vp=req.body.verifiablePresentation,
      options=req.body.options
    );
    res.send(JSON.stringify(verificationResponse))
    })

console.log(`Server is ready!`);
