import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import Navbar from "../components/Navbar";
import SearchBar from "react-native-dynamic-search-bar";

function Home({ navigation }) {
  const [casesModalVisible, setCasesModalVisible] = useState(false);
  const [doctorsModalVisible, setDoctorsModalVisible] = useState(false);

  const mockCases = [
    { id: 1, description: "High fever treatment", date: "20 Oct 2024" },
    { id: 2, description: "Annual check-up", date: "15 Oct 2024" },
    { id: 3, description: "Dental cleaning", date: "10 Oct 2024" },
  ];

  const mockDoctors = [
    { id: 1, name: "Dr. John Doe", specialty: "Cardiologist" },
    { id: 2, name: "Dr. Jane Smith", specialty: "Dermatologist" },
    { id: 3, name: "Dr. Emily Johnson", specialty: "Pediatrician" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.profileImage}
          />
          <Text style={styles.welcome}>Welcome User!</Text>
        </View>
        <View style={styles.search}>
          <SearchBar placeholder="Search here" />
        </View>

        <Text style={styles.appointments}>Upcoming appointments</Text>

        <View style={styles.box}>
          <View style={styles.box1}>
            <Text>20</Text>
            <Text>Tuesday</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.doctor}>Dr.Samvid Gupta</Text>
            <Text>Dermatologist</Text>
            <Text style={styles.time}>10:30 am</Text>
          </View>
        </View>

        {/* Create Appointment Button */}
        <TouchableOpacity
          style={styles.appointmentButton}
          onPress={() => navigation.navigate("Appointment")} // Updated navigation target
        >
          <Text style={styles.buttonText}>Create an Appointment</Text>
        </TouchableOpacity>

        <View style={styles.subnav}>
          <Text style={styles.subhead}>Last cases</Text>
          <TouchableOpacity onPress={() => setCasesModalVisible(true)}>
            <Text style={styles.see}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subnav}>
          <Text style={styles.subhead}>My doctors</Text>
          <TouchableOpacity onPress={() => setDoctorsModalVisible(true)}>
            <Text style={styles.see}>My Doctors</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Navbar navigation={navigation} />

      {/* Cases Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={casesModalVisible}
        onRequestClose={() => setCasesModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Last Cases</Text>
            {mockCases.map((caseItem) => (
              <View key={caseItem.id} style={styles.modalItem}>
                <Text>{caseItem.description}</Text>
                <Text>{caseItem.date}</Text>
              </View>
            ))}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setCasesModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Doctors Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={doctorsModalVisible}
        onRequestClose={() => setDoctorsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Available Doctors</Text>
            {mockDoctors.map((doctor) => (
              <View key={doctor.id} style={styles.modalItem}>
                <Text>{doctor.name}</Text>
                <Text>{doctor.specialty}</Text>
              </View>
            ))}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setDoctorsModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  see: {
    color: "#7b844d",
  },
  subnav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 5,
  },
  subhead: {
    fontWeight: "bold",
    fontSize: 18,
  },
  search: {
    marginVertical: 10,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
  },
  appointments: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 10,
  },
  time: {
    backgroundColor: "#7b844d",
    width: 75,
    textAlign: "center",
    color: "white",
    borderRadius: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  box: {
    flexDirection: "row",
    backgroundColor: "#b9bf9c",
    padding: 10,
    width: "90%",
    marginLeft: "5%",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  box1: {
    height: 80,
    width: 80,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
  },
  box2: {
    justifyContent: "center",
    paddingLeft: 10,
  },
  doctor: {
    fontWeight: "bold",
  },
  appointmentButton: {
    backgroundColor: "#7b844d",
    borderRadius: 10,
    paddingVertical: 15,
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  modalHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  modalItem: {
    marginVertical: 5,
  },
  closeButton: {
    backgroundColor: "#7b844d",
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
});

export default Home;
