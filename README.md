![Morphine](http://i.imgur.com/iqyCvDP.png)
[![Build Status](https://travis-ci.org/iclinic/morphine.svg?branch=master)](https://travis-ci.org/iclinic/morphine) [![Coverage Status](https://coveralls.io/repos/github/iclinic/morphine/badge.svg)](https://coveralls.io/github/iclinic/morphine)

# A long time ago...

With the time I noticed that when we try to scale applications with React + [any flux implementation here] we got lost in the many folders and layers that we create, and the principal, we lost the sense of reusability of react.
We are trying a new architecture to simplify the way we see this reusability and give less responsibility for the things.

# What is morphine

Morphine was created **one** of the pillars of that new archicheture, a server that have one mission: Create container and construct Views. But after all can be only a simple boilerplate to implement your new application :)

# Scripts

We are using [Yarn](https://yarnpkg.com/), click on link and install it before anything!

| yarn ...  | description  |
|    :-:    |     :--      |
| dev       |  start a simple server with hot-reload for development |
| build     |  build your application to deploy on prod   |
| start     |  start a server with builded files in `yarn build` |
| test      |  run test in watch mode (for TDD)   |
| test:cov  |  run tests with coverage |
| lint      |  pass lint through your src files with AirBnb lint |
| docker_build  | build a docker image of your project  |
| docker_run | up the container builded on `docker_build`  |
| coveralls  | send coverage data for coveralls  |

# Redux Dev Tools
`ctrl + q` Change position
`ctrl + h` Hide

# Lint Problems
AirBnb lint has a little problem with a version of `eslint-plugin-jsx-a11y` you can fix that with only 2 commands:

```
  npm uninstall eslint-plugin-jsx-a11y
  npm install eslint-plugin-jsx-a11y@2.2.3
```

> Exec that **AFTER** install the dependencies

# Quick Start
```
# Download Yarn ....

yarn install

yarn dev

```
