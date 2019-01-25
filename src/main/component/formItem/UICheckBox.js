import React, { PureComponent } from 'react';

import {StyleSheet, Image, Text, View, TouchableHighlight} from 'react-native';

const defaultProps = {
    labelLines: 1,
    labelBefore: false,
    checked: null,
    checkedImage: Img.CheckBoxCheckedImage,
    uncheckedImage: Img.CheckBoxUnCheckedImage,
    underlayColor: '#ffffff',
    disabled: null
};
const defaultState = {
    internalChecked: false
};
export default class UICheckBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = defaultState;
    }
    onChange = ()=> {
        if (this.props.onChange && typeof this.props.checked === 'boolean') {
            this.props.onChange(!this.props.checked);
        } else {
            let internalChecked = this.state.internalChecked;

            if (this.props.onChange) {
                this.props.onChange(!internalChecked);
            }
            this.setState({
                internalChecked: !internalChecked
            });
        }
    }

    render() {
        let source;
        if (typeof this.props.checked === 'boolean') {
            source = this.props.checked
                ? this.props.checkedImage
                : this.props.uncheckedImage;
        } else {
            source = this.state.internalChecked
                ? this.props.checkedImage
                : this.props.uncheckedImage;
        }
        if (this.props.label) {
          if (this.props.labelBefore) {
            container = (
                <View style={[styles.container, this.props.containerStyle]}>
                    <View style={styles.labelContainer}>
                        <Text numberOfLines={this.props.labelLines} style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                    </View>
                    <Image style={[styles.checkbox, this.props.checkboxStyle]} source={source}/>
                </View>
            );
          } else {
              container = (
                  <View style={[styles.container, this.props.containerStyle]}>
                      <Image style={[styles.checkbox, this.props.checkboxStyle]} source={source}/>
                      <View style={styles.labelContainer}>
                          <Text numberOfLines={this.props.labelLines} style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                      </View>
                  </View>
              );
          }
        }else{
          container = (
            <View style={[styles.container, this.props.containerStyle]}>
                <Image style={[styles.checkbox, this.props.checkboxStyle]} source={source}/>
            </View>
        );
        }
        

        return (
            <TouchableHighlight onPress={this.onChange} underlayColor={this.props.underlayColor} disabled={this.props.disabled}>
                {container}
            </TouchableHighlight>
        );
    }
}


UICheckBox.defaultProps = defaultProps;

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 5
    },
    checkbox: {
        width: 26,
        height: 26
    },

    labelContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    label: {
        fontSize: Constant.smallFontSize,
    }
});
