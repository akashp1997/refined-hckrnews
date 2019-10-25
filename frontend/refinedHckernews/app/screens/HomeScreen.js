import React from 'react';
import {View, Text} from 'react-native';

import SegmentedControlIOS from "@react-native-community/segmented-control";

export default class HomeScreen extends React.Component {
    render() {
        console.error(SegmentedControlIOS);
        return (
            <SegmentedControlIOS
              tintColor="#00ff00"
              values={['One', 'Two', 'Three']}
              selectedIndex={1}
            />
        );

        type SegmentedControlIOSProps = $ReadOnly<{|
          ...ViewProps,
          /**
           * The labels for the control's segment buttons, in order.
           */
          values?: $ReadOnlyArray<string>,
          /**
           * The index in `props.values` of the segment to be (pre)selected.
           */
          selectedIndex?: ?number,
          /**
           * Callback that is called when the user taps a segment;
           * passes the segment's value as an argument
           */
          onValueChange?: ?(value: number) => mixed,
          /**
           * Callback that is called when the user taps a segment;
           * passes the event as an argument
           */
          onChange?: ?(event: Event) => mixed,
          /**
           * If false the user won't be able to interact with the control.
           * Default value is true.
           */
          enabled?: boolean,
          /**
           * Accent color of the control.
           */
          tintColor?: ?string,
          /**
           * If true, then selecting a segment won't persist visually.
           * The `onValueChange` callback will still work as expected.
           */
          momentary?: ?boolean,
        |}>;
        /*return (
                <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <Text>Home!</Text>
                </View>
        );*/
    }
}
