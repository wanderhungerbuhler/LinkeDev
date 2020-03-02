import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    top: Platform.OS == 'android' ? 31 : 30,
    height: 45,
    marginBottom: 31,
    backgroundColor: '#0079b8',
  }
});

export default styles;
