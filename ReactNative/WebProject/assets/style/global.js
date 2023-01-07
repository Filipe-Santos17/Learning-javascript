import { StyleSheet } from "react-native";

const globalCss = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    map:{
        height: '60%'
    },

    search: {
        height: '40%',
    }
});
 
export { globalCss }