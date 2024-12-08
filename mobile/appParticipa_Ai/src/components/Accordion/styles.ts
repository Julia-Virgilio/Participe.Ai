import { StyleSheet } from 'react-native';

import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    borderRadius: 5,
  },
  header: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: themas.Colors.primaryText,
  },
  content: {
    padding: 15,
    backgroundColor: themas.Colors.lighGray,

  },
  contentText: {
    fontSize: 18,
    // backgroundColor: themas.Colors.lighGray,
  },
});



