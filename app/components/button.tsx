import React, { Component } from 'react';
import { Pressable, Text, Dimensions } from 'react-native';

interface ButtonComponentProps {
  onPress(): void;
  text: string;
  marginHorizontal: number;
}
class ButtonComponent extends Component<ButtonComponentProps> {
  constructor(props: ButtonComponentProps) {
    super(props);
  }

  render(): JSX.Element {
    const deviceWidth = Dimensions.get('window').width;
    const onPress = this.props.onPress;
    const text = this.props.text;
    return (
      <Pressable
        onPress={onPress}
        style={[
          {
            backgroundColor: '#007AFF',
            borderRadius: 10,
            maxWidth: 300,
            width: '100%'
          },
          deviceWidth < 500 ? { maxWidth: 500, marginHorizontal: 0 } : {},
          {
            marginHorizontal: this.props.marginHorizontal
          }
        ]}
      >
        <Text
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 18,
            color: 'white',
            margin: 16
          }}
        >
          {text}
        </Text>
      </Pressable>
    );
  }
}

export default ButtonComponent;
