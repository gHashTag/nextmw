import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gold',
    justifyContent: 'center'
  },
  text: {
    alignItems: 'center',
    fontSize: 24
  }
})

export default props => (
  <View style={styles.container}>
    <View style={{ position: 'absolute', top: '50%', right: '15%' }}>
      <Text style={{ fontSize: 80, textAlign: 'right' }} >
        Home 
      </Text>
    </View>
  </View>
)
