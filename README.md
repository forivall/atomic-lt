# atomic-lt

The shell file redirection operator (`>` - less than sign aka `&lt;`) but using fs-write-stream-atomic

[![build status](https://secure.travis-ci.org/forivall/atomic-lt.svg)](http://travis-ci.org/forivall/atomic-lt)
[![dependency status](https://david-dm.org/forivall/atomic-lt.svg)](https://david-dm.org/forivall/atomic-lt)
[![coverage status](https://coveralls.io/repos/github/forivall/atomic-lt/badge.svg)](https://coveralls.io/github/forivall/atomic-lt)

## Installation

```
npm install --save atomic-lt
```

## Usage

`(echo 'foo'; < bar) | lt bar` - prepends `bar` file's contents with `foo`

## Credits
[Emily Marigold Klassen](https://github.com/forivall/)

## License

ISC
