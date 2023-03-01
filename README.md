# india-pincode-search

Node module to easily search any pincode details in India.

The pincode data used in this module is provided by data.gov.in

## Install using npm

``` bash
npm install india-pincode-search
```

## Example usage

```javascript
var query = require('india-pincode-search');

query.search('452009');
/*[{
    state: 'MADHYA PRADESH',
    city: 'INDORE',
    district: 'Indore',
    village: 'Indore',
    office: 'Sudama Nagar S.O',
    pincode: '452009'
  }]*/


query.search('Sudama naga');
/*[{
    state: 'MADHYA PRADESH',
    city: 'INDORE',
    district: 'Indore',
    village: 'Indore',
    office: 'Sudama Nagar S.O',
    pincode: '452009'
  }]*/

```

## Sources

The pincode data used in the module has been provided by data.gov.in.

## License

MIT
