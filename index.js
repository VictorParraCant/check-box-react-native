 /**
 * check-box-react-native
 * Checkbox component for react native, it works on iOS and Android
 * @flow
 */

import React, {Component} from 'react'
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native'

export default class CheckBox extends Component {
    static propTypes = {
        ...View.propTypes,
        leftText: React.PropTypes.string,
        leftTextView: React.PropTypes.element,
        rightText: React.PropTypes.string,
        leftTextStyle: View.propTypes.style,
        rightTextView: React.PropTypes.string,
        rightTextStyle: View.propTypes.style,
        checkedImage: React.PropTypes.element,
        unCheckedImage: React.PropTypes.element,
        onClick: React.PropTypes.func.isRequired,
        isChecked: React.PropTypes.bool,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        isChecked: false,
        leftTextStyle: {},
        rightTextStyle: {}
    }

    _renderLeft() {
        if (this.props.leftTextView)return this.props.leftTextView;
        if (!this.props.leftText)return null;
        return (
            <Text style={[styles.leftText, this.props.leftTextStyle]}>{this.props.leftText}</Text>
        )
    }

    _renderRight() {
        if (this.props.rightTextView)return this.props.rightTextView;
        if (!this.props.rightText)return null;
        return (
            <Text style={[styles.rightText, this.props.rightTextStyle]}>{this.props.rightText}</Text>
        )
    }

    _renderImage() {
        if (this.props.isChecked) {
            return this.props.checkedImage ? this.props.checkedImage : this.genCheckedImage();
        } else {
            return this.props.unCheckedImage ? this.props.unCheckedImage : this.genCheckedImage();
        }
    }

    genCheckedImage() {
        var source = this.props.isChecked ? require('./img/ic_check_box.png') : require('./img/ic_check_box_outline_blank.png');

        return (
            <Image source={source}/>
        )
    }

    handlerOnClick = () => {
        this.props.onClick()
    }

    render() {
        return (
            <TouchableHighlight
                style={this.props.style}
                onPress={this.handlerOnClick}
                underlayColor='transparent'
                disabled={this.props.disabled}
            >
                <View style={styles.container}>
                    {this._renderLeft()}
                    {this._renderImage()}
                    {this._renderRight()}
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftText: {
        flex: 1,
    },
    rightText: {
        flex: 1,
        marginLeft: 10
    }
})
