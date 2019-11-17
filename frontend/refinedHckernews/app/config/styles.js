import { StyleSheet } from 'react-native';

export const ScreenStyles = StyleSheet.create({
    Screen: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
    },
});
export const HomeStyles = StyleSheet.create({
    MainHeader: {
        flex: 2,
        justifyContent: 'center',
    },
    HeaderText: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    MainSegment: {
        flex: 1,
    },
    Articles: {
        flex: 16,
    },
});
