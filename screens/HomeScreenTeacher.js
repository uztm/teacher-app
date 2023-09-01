import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableHighlight, StyleSheet,Dimensions, Button } from 'react-native';
import JournalModal from './JournalModal'; // Adjust the import path based on your project structure


const { width } = Dimensions.get('window');
const cardWidth = width * 0.95;

const cardContents = [
  {
    darsHolati: 'Tugagan',
    darsVaqti: 'from 9:00 / 9:45',
    fanNomi: 'front-end',
    darsXonasi: '101',
  },
  {
    darsHolati: 'Tugatish',
    darsVaqti: '10:00 / 10:45',
    fanNomi: 'ona tili',
    darsXonasi: '102',
  },
  {
    darsHolati: 'Boshlah',
    darsVaqti: '10:00 / 10:45',
    fanNomi: 'ona tili',
    darsXonasi: '103',
  },
];

const HomeScreenTeacher = () => {
  const [journalModalVisible, setJournalModalVisible] = useState(false);
  const [selectedStudentName, setSelectedStudentName] = useState('');

  const getStatusButtonColor = (status) => {
    switch (status) {
      case 'Tugagan':
        return '#777A7D';
      case 'Tugatish':
        return '#FF9900';
      case 'Boshlah':
        return '#14AD51';
      default:
        return '#FF0000'; // Default color for unknown status
    }
  };

  const handleCardPress = (studentName) => {
    setSelectedStudentName(studentName);
    setJournalModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cardContents.map((card, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.header}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>5-A</Text>
            <TouchableHighlight
              style={[styles.statusBtn, { backgroundColor: getStatusButtonColor(card.darsHolati) }]}
              onPress={() => handleCardPress(card.fanNomi)}
            >
              <Text style={styles.statusBtnText}>{card.darsHolati}</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.line}></View>
          <View style={styles.cardBody}>
            <View style={styles.cardItem}>
              <Text style={styles.itemTitle}>Dars vaqti: </Text>
              <Text style={styles.itemContent}>{card.darsVaqti}</Text>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.itemTitle}>Fan nomi: </Text>
              <Text style={styles.itemContent}>{card.fanNomi}</Text>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.itemTitle}>Dars holati: </Text>
              <Text style={styles.itemContent}>{card.darsHolati}</Text>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.itemTitle}>Dars xonasi: </Text>
              <Text style={styles.itemContent}>{card.darsXonasi}</Text>
            </View>
          </View>
        </View>
      ))}

      <JournalModal
        isVisible={journalModalVisible}
        onClose={() => setJournalModalVisible(false)}
        studentName={selectedStudentName}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F2F4',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
  },
  card: {
    width: cardWidth,
    height: 250,
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent', // This will be overridden based on classStatus
    marginVertical: 5, // Add margin to create space between each card
    paddingTop: 11,
  },
  header: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  statusBtn: {
    width: 120,
    height: '100%',
    backgroundColor: '#FF0000', // Default color
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  statusBtnText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
  cardBody: {
    width: '100%',
    height: '70%',
    paddingVertical: 5,
  },
  cardItem: {
    width: '100%',
    height: 40,
    backgroundColor: '#F0F2F4',
    borderRadius: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  itemTitle: {
    fontWeight: '500',
    fontSize: 16,
  },
  itemContent: {
    fontWeight: '600',
    fontSize: 16,
    color: '#14AD51',
  },
  line: {
    width: '100%',
    height: 3,
    backgroundColor: '#DFDFDF',
    borderRadius: 20,
  },
});




export default HomeScreenTeacher;