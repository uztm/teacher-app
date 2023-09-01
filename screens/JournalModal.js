import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableHighlight, TextInput, Button, FlatList, Dimensions } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.95;

const JournalModal = ({ isVisible, onClose, studentName }) => {
    const [grading, setGrading] = useState({});
    const [attendanceStatus, setAttendanceStatus] = useState({});

    const studentsList = [
        { id: 1, name: 'Bekzod' },
        { id: 2, name: 'Farrux' },
        { id: 3, name: 'Bekzodbek' },
        { id: 4, name: 'Alices Johnson' },
        { id: 5, name: 'John Doe' },
        { id: 6, name: 'Jane Smith' },
        { id: 7, name: 'Alice Johnson' },
        { id: 8, name: 'Alices Johnson' },
        { id: 9, name: 'John Doe' },
        { id: 10, name: 'Jane Smith' },
        { id: 11, name: 'Alice Johnson' },
        { id: 12, name: 'Alices Johnson' },
        // Add more students here
    ];

    const handleGradeChange = (studentId, grade) => {
        setGrading(prevGrading => ({ ...prevGrading, [studentId]: grade }));
    };

    const statusOptions = [
        { count: 0, text: 'Davomat', color: '#F0F2F4', },
        { count: 1, text: 'Keldi', color: '#14AD51', },
        { count: 2, text: 'Kechikdi', color: '#FF9900', },
        { count: 3, text: 'Kelmadi', color: '#FF0000', },
    ];

    const handleAttendanceClick = studentId => {
        const currentStatus = attendanceStatus[studentId] || statusOptions[0];
        const currentIndex = statusOptions.findIndex(option => option.count === currentStatus.count);

        const nextIndex = (currentIndex + 1) % statusOptions.length;
        const newStatus = statusOptions[nextIndex];

        setAttendanceStatus(prevStatus => ({ ...prevStatus, [studentId]: newStatus }));
    };


    const renderStudentRow = ({ item }) => {
        const status = attendanceStatus[item.id] || { text: 'Davomat', color: '#F0F2F4' };

        return (
            <View style={styles.studentRow}>
                <View style={styles.rowItemName}><Text style={styles.studentName}>{item.name}</Text></View>
                <View style={styles.rowItemInput}>
                    <TextInput
                        style={styles.gradeInput}
                        placeholder="Grade"
                        placeholderTextColor="#777A7D"
                        value={grading[item.id] || ''}
                        onChangeText={text => {
                            // Remove non-numeric characters
                            const numericText = text.replace(/[^0-5]/g, '');

                            // Make sure the text is not empty
                            if (numericText !== '') {
                                // Convert to number and restrict to the range 0-5
                                const numericValue = Math.min(Math.max(parseInt(numericText), 0), 5);

                                // Update the state with the numeric value
                                handleGradeChange(item.id, numericValue.toString());
                            } else {
                                // If input is empty, update the state with an empty string
                                handleGradeChange(item.id, '');
                            }
                        }}
                        keyboardType="numeric"
                    />

                </View>
                <View style={[styles.rowItem, { backgroundColor: status.color }]}>
                    <Button
                        title={status.text}
                        onPress={() => handleAttendanceClick(item.id)}
                        color={status.color === '#F0F2F4' ? '#000000' : '#FFFFFF'}

                    />
                </View>
            </View>
        );
    };

    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            presentationStyle="overFullScreen"
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>{studentName} Journal</Text>
                <View style={styles.scrollContainer}>
                    {/* ... other components ... */}
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Jurnal: </Text>
                        <Text style={styles.headerText}>17.08.2023</Text>
                    </View>
                    <View style={styles.studentRow}>
                        <View style={styles.rowItemName}><Text style={{ fontWeight: 'bold', fontSize: 18 }}>F.I.O</Text></View>
                        <View style={styles.rowItemInput}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Baho</Text>
                        </View>
                        <View style={styles.rowItem}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Davomat</Text>
                        </View>
                    </View>
                    <FlatList
                        style={styles.card}
                        data={studentsList}
                        renderItem={renderStudentRow}
                        keyExtractor={item => item.id.toString()}
                    />
                    <View style={styles.bottomLine}></View>
                    <View style={styles.bottomContent}>

                        <View style={styles.bottomContentItemContainer}><AntDesign name="infocirlceo" size={26} color="#5730FB" style={{ marginRight: 10 }} /><Text style={styles.btConText}>Baho va davomat natijasini saqlash uchun yashil tugmani bosing</Text></View>
                        <TouchableHighlight style={styles.saqlashBtn}><Text style={{ color: 'white', fontWeight: 'bold' }}>Natijani saqlash</Text></TouchableHighlight>
                    </View>
                </View>
                <TouchableHighlight style={styles.closeButton} onPress={onClose}>
                    <Text>Close</Text>
                </TouchableHighlight>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F2F4',
        // paddingVertical: 80,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scrollContainer: {
        width: cardWidth,
        height: 650,
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
        // alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'transparent',
        marginVertical: 5,
        paddingTop: 11,
    },
    studentRow: {
        flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 5, // Added horizontal padding
        borderRadius: 5, // Added border radius
        width: '100%'
    },
    studentName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#777A7D'
        // textAlign: 'left'
    },
    gradeInput: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        paddingVertical: 6,
        borderColor: '#F0F2F4',
        borderWidth: 5,
        borderRadius: 5, // Added border radius
        backgroundColor: 'white', // Added background color
        fontWeight: '700'
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 5,
    },
    rowItem: {
        backgroundColor: '#F0F2F4',
        height: 40,
        marginHorizontal: 5,
        width: 120,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowItemName: {
        backgroundColor: '#F0F2F4',
        height: 40,
        marginHorizontal: 5,
        width: '40%',
        borderRadius: 10,
        // alignItems: 'center',
        paddingLeft: 10,
        justifyContent: 'center',
    },
    rowItemInput: {
        backgroundColor: '#F0F2F4',
        height: 40,
        marginHorizontal: 5,
        width: 75,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    bottomLine: {
        width: '100%',
        height: 3,
        backgroundColor: '#F0F2F4',
    },
    bottomContent: {
        width: '100%',
        height: 50,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottomContentItemContainer: {
        width: '50%',
        flexDirection: 'row',
    },
    btConText: {
        color: '#5730FB',
    },
    saqlashBtn: {
        backgroundColor: '#14AD51',
        height: 30,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
});

export default JournalModal;
