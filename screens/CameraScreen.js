import { Camera, CameraType } from 'expo-camera/legacy';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [prediction, setPrediction] = useState(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync({
        quality: 0.5,
        base64: true,
      });
      setPhoto(photo);
      sendToServer(photo);
    }
  };

  const sendToServer = async (photo) => {
    try {
      // Create form data
      const formData = new FormData();
      formData.append('file', {
        uri: photo.uri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });

      // Send to server
      const response = await fetch('http://your-server-url:5000/predict', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const result = await response.json();
      setPrediction(result);
    } catch (error) {
      console.error('Error sending photo to server:', error);
    }
  };

  return (
    <View style={styles.container}>
      {photo ? (
        <View style={styles.preview}>
          <Image style={styles.previewImage} source={{ uri: photo.uri }} />
          {prediction && (
            <View style={styles.predictionContainer}>
              <Text style={styles.predictionText}>
                Primary: {prediction.highest_predicted_class} ({prediction.highest_percentage})
              </Text>
              {prediction.alternative_class && (
                <Text style={styles.predictionText}>
                  Alternative: {prediction.alternative_class} ({prediction.alternative_percentage})
                </Text>
              )}
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={() => setPhoto(null)}>
            <Text style={styles.text}>Take Another</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Camera 
          style={styles.camera} 
          type={type}
          ref={ref => setCameraRef(ref)}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  previewImage: {
    width: '100%',
    height: '80%',
  },
  predictionContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 5,
  },
  predictionText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
});