# ARC content Javascript SDK

SDK to get ARC data for Javascript

## Installation

Install with npm, this is private package and need .npmrc.

```bash
npm install -S @inquirer/arc-content-sdk-javascript
```

## Usage

```javascript
const ArcContentSDK = require('@inquirer/arc-content-sdk-javascript');
const arcContentApi = new ArcContentSDK.ArcContent('dev', 'pmn', 'uwer27234293!==');
const story = await arcContentApi.getStoryById('Z7BHEXNTSFGXDNI7SFFOQ35KFM');

console.log(story.data);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author
[Kayo Tran](mailto:ktran@inquirer.com)