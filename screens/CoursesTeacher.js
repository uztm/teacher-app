import React, { useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.95;

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export default function Courses() {
 
  return (
    <View style={styles.container}>
     <View style={styles.scrollContainer}>
     <ScrollView
        vertical={true}
        contentContainerStyle={styles.scrollContainer2}
      >
        {/* Add the 6x6 grid here */}
        <View style={styles.gridContainer}>
          {/* Header Row */}
          <View style={[styles.rowContainer, styles.headerRow]}>
            <View style={styles.fixedCell}></View>
            {daysOfWeek.map((day, rowIndex) => (
              <View key={rowIndex} style={styles.headerCell}>
                <Text>{day}</Text>
              </View>
            ))}
          </View>
          {/* Grid */}
          {daysOfWeek.map((day, rowIndex) => (
            <View key={day} style={styles.rowContainer}>
              <View style={styles.fixedCell}>
                <Text>{day}</Text>
              </View>
              {daysOfWeek.map((_, colIndex) => (
                <View key={colIndex} style={styles.cell}></View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F4',
    alignItems: 'center',
  },
  scrollContainer: {
    width: cardWidth,
    borderRadius: 20,
    backgroundColor: '#FAFAFA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 10,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    marginVertical: 5,
    marginTop: 20,
  },
  gridContainer: {
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'column',
  },
  headerRow: {
    position: 'sticky',
    top: 0,
    zIndex: 2,
    backgroundColor: '#FAFAFA',
  },
  fixedCell: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    borderRadius: 5,
    margin: 2,
  },
  headerCell: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    borderRadius: 5,
    margin: 2,
  },
  cell: {
    width: 60,
    height: 60,
    backgroundColor: '#F0F2F4',
    borderRadius: 5,
    margin: 2,
  },
});
