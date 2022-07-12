[![JavaScript](https://img.shields.io/badge/--blue?logo=javascript&logoColor=fff)](https://www.javascript.com/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-blue.svg)](https://github.com/pt1602/gitlab-git-clone/graphs/commit-activity)
[![github forks](https://badgen.net/github/forks/pt1602/gitlab-git-clone/)](https://github.com/pt1602/gitlab-git-clone/network/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)](http://makeapullrequest.com)
[![github stars](https://img.shields.io/github/stars/pt1602/gitlab-git-clone.svg?style=social&label=Star&maxAge=2592000)](https://github.com/pt1602/gitlab-git-clone/stargazers/)

---

# Simple Vue + Bootstrap Setup

I simply added vue, bootstrap and fontawesome via npm. To copy and compile the scss-files I added an gulpfile.

---

## Requirements

* Homebrew on Mac
* Local Docker and DDEV installation

* Get Homebrew [here](https://brew.sh/)

### Install ddev with homebrew

```
brew install drud/ddev/ddev
```

### Enable ntfs for ddev on Mac
#### Docker needs to be running

```
curl -O https://raw.githubusercontent.com/drud/ddev/master/scripts/macos_ddev_nfs_setup.sh && chmod +x macos_ddev_nfs_setup.sh && ./macos_ddev_nfs_setup.sh && rm macos_ddev_nfs_setup.sh
```

### Install mkcert

```
mkcert -install
```

## Setup

```
ddev start
ddev exec npm install
ddev exec gulp
```

## Usage

```
ddev start
ddev exec gulp sass:watch
```

### Access
* https://vjsbs.ddev.site/

---

## Nice to know DDEV-Commands

### Start container in current directory

```
ddev start
```

### Shutdown container in current directory

```
ddev stop
```

### Shutdown all containers

```
ddev poweroff
```

### SSH

```
ddev ssh
```

---

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)
