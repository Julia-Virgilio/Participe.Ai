import { StyleSheet } from 'react-native';

import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  card: {
    width: '30%', // Ajusta o tamanho para caber 3 colunas
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    color:themas.Colors.gray,
  },
  description: {
    fontSize: 12,
    color: '#333',
    marginHorizontal: 10,
    marginBottom: 10,
    height: 120,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor:themas.Colors.primaryText,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
   // bottom: 0,
  //  position: 'absolute',
    width: '100%',
 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
    
  },
});
