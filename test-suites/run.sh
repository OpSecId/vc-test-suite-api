#!/bin/bash
npm i
npx mocha tests/
./send_results.sh