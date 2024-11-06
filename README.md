# vc-test-suite-api

API server 

## Creating a new backchannel for your implementation

```
# for python
cp backchannels/python implementation/

# for javascript
cp backchannels/javascript implementation/

```

## Editing your implementation

The goal is to plug in your libraries to pass the desired test suite.
Edit the `implementation/src/vc.*` files according to the comments to add your code.
It will take as input a credential request and user defined options.
Currently only the vcdm 2.0 suite is integrated, looking at data model validation.

Once you are satisfied, edit the `test-suite/localConfig.cjs` file to add whichever options/tags you might need.

## Running the test suite

```
docker compose up --build

```

## Browsing the results
```
http://reports.docker.localhost
```