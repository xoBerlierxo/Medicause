import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

function AppointmentForm() {
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [altDateTime, setAltDateTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [reason, setReason] = useState('');
  const [serviceRequired, setServiceRequired] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [mode, setMode] = useState('');
  const [location, setLocation] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [insuranceDetails, setInsuranceDetails] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');

  const handleCreateAppointment = ({}) => {
    const appointmentData = {
      fullName,
      contactNumber,
      email,
      preferredDate,
      preferredTime,
      altDateTime,
      appointmentType,
      reason,
      serviceRequired,
      specialRequests,
      mode,
      location,
      dob,
      gender,
      insuranceDetails,
      emergencyContact,
    };
    console.log('Appointment Created:', appointmentData);
    alert('Appointment Created Successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Appointment</Text>

      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Contact Number" value={contactNumber} onChangeText={setContactNumber} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" />

      <TextInput style={styles.input} placeholder="Preferred Date" value={preferredDate} onChangeText={setPreferredDate} />
      <TextInput style={styles.input} placeholder="Preferred Time" value={preferredTime} onChangeText={setPreferredTime} />
      <TextInput style={styles.input} placeholder="Alternative Date/Time" value={altDateTime} onChangeText={setAltDateTime} />
      <TextInput style={styles.input} placeholder="Appointment Type" value={appointmentType} onChangeText={setAppointmentType} />
      <TextInput style={styles.input} placeholder="Reason for Appointment" value={reason} onChangeText={setReason} multiline />

      <TextInput style={styles.input} placeholder="Service Required" value={serviceRequired} onChangeText={setServiceRequired} />
      <TextInput style={styles.input} placeholder="Special Requests/Instructions" value={specialRequests} onChangeText={setSpecialRequests} multiline />
      <TextInput style={styles.input} placeholder="Preferred Mode of Appointment" value={mode} onChangeText={setMode} />
      <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />

      <TextInput style={styles.input} placeholder="Date of Birth" value={dob} onChangeText={setDob} />
      <TextInput style={styles.input} placeholder="Gender" value={gender} onChangeText={setGender} />
      <TextInput style={styles.input} placeholder="Health Insurance Details" value={insuranceDetails} onChangeText={setInsuranceDetails} />
      <TextInput style={styles.input} placeholder="Emergency Contact" value={emergencyContact} onChangeText={setEmergencyContact} keyboardType="phone-pad" />

      <Button title="Create Appointment" onPress={handleCreateAppointment} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default AppointmentForm;
