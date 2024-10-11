# vc-test-suite-backchannels


## Creating a new backchannel

```
# for python
cp backchannels/python implementations/{my-implementation}

# for javascript
cp backchannels/javascript implementations/{my-implementation}

```

## Running the test suite

```
docker compose up --build

```

## Browsing the results
```
http://reports.docker.localhost
```