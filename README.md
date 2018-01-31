# check-box-react-native

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Checkbox component for react native, it works on iOS and Android.

## Content:

- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation:

```
npm install check-box-react-native --save
```


## Getting started:

Add `react-native-check-box` to your js file.   

```
import CheckBox from 'check-box-react-native'
```

Inside your component's render method, use CheckBox:   

```javascript
<CheckBox
    style={{ flex: 1, padding: 10 }}
    onClick={ () => this.onClick(data) }
    isChecked={ data.checked }
    leftText={ leftText }
/>
```

Then you can use it like this:   


### Basic usage

```javascript
 <CheckBox
     style={{ flex: 1, padding: 10 }}
     onClick={ () => this.onClick(data) }
     isChecked={ data.checked }
     leftText={ leftText }
 />
 ```

### Custom CheckBox

```javascript
renderCheckBox = (data) => {
    const leftText = data.name;
    return (
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={() => this.onClick(data)}
            isChecked={data.checked}
            leftText={leftText}
            checkedImage={
              <Image  
                source={require('../../page/my/img/ic_check_box.png')}
                style={this.props.theme.styles.tabBarSelectedIcon}
              />
            }
            unCheckedImage={
              <Image
                source={require('../../page/my/img/ic_check_box_outline_blank.png')}
                style={this.props.theme.styles.tabBarSelectedIcon}
              />
            }
        />
    );
}
```


## API:

Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
style  | View.propTypes.style  | true |   |   Custom style checkbox
leftText | React.PropTypes.string |true |   | Custom left Text
leftTextStyle  |  View.propTypes.style | true | Custom left Text style
rightText | React.PropTypes.string |true |   | Custom right Text
rightTextStyle  | View.propTypes.style | true | Custom right Text style
checkedImage  |  React.PropTypes.element  | true  | Default image | Custom  checked Image
unCheckedImage  |  React.PropTypes.element  | true  |  Default image  | Custom  unchecked Image
isChecked  |  React.PropTypes.bool |  true  |  false  | PropTypes checkbox checked
onClick   |  React.PropTypes.func.isRequired |  false  |  | callback  function

## Contribution:

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

---

## License:

[MIT](https://github.com/VictorParraCant/check-box-react-native/blob/master/LICENSE.md)



[npm-image]: https://badge.fury.io/js/check-box-react-native.svg
[npm-url]: https://badge.fury.io/js/check-box-react-native
[travis-image]: https://travis-ci.org/VictorParraCant/check-box-react-native.svg?branch=master
[travis-url]: https://travis-ci.org/VictorParraCant/check-box-react-native
