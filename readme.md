# quarter [![Build Status](https://travis-ci.org/arthurvr/quarter.svg?branch=master)](https://travis-ci.org/arthurvr/quarter)

> Get the quarter of the year a date is in


## Install

```
$ npm install --save quarter
```


## Usage

```js
var quarter = require('quarter');

quarter();
//=> 2

quarter(new Date('July 20, 1950'));
//=> 3
```


## API

### quarter(date)

#### date

Default: _Current date_  
Type: instance of `Date`


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
