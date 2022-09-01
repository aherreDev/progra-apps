import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Switch, Modal, Pressable, SafeAreaView, Button, Alert } from "react-native";

const Separator = () => (
  <View style={page.separator} />
);

const App = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
 
  return(
    <SafeAreaView style={page.container}>
    <View>
      <Image
          style={page.bigLogo}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Club_de_Futbol_Cruz_Azul.svg/1200px-Club_de_Futbol_Cruz_Azul.svg.png',
          }}
        />
      <Text style={flattenStyle}>El Ramon</Text>
      <Text>Current Style:</Text>
      <Text style={page.code}>
        {JSON.stringify(flattenStyle, null, 2)}
      </Text>

      {showEasterEgg && (
        <View>
          <Text> Be Happy :D </Text>
          <Image
            style={page.bigLogo}
            source={{
              uri: 'https://media3.giphy.com/media/1yMNQPnrT891liTXEg/giphy.gif',
            }}
          />
        </View>
      )}
    </View>

    <Separator />

    <View style={page.fixToText}>
    <Button
        title={showEasterEgg ? 'Hide secret' : 'Show Secret'}
        onPress={() => setShowEasterEgg(!showEasterEgg)}
      />
      <Button
        title="Right button"
        onPress={() => console.log('Se menea se menea')}
      />
    </View>

    <View style={page.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

    <View style={modalCSS.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalCSS.centeredView}>
          <View style={modalCSS.modalView}>
            <Text style={modalCSS.modalText}>The modal is alive!</Text>
            <Pressable
              style={[modalCSS.button, modalCSS.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalCSS.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[modalCSS.button, modalCSS.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={modalCSS.textStyle}>Display Modal</Text>
      </Pressable>
    </View>
  </SafeAreaView>
  );
}


const modalCSS = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "fb8500",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: "center",
    backgroundColor: "#8ecae6",
    marginHorizontal:16,
    marginVertical:16
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#219ebc",
    backgroundColor: "#FFFFED"
  },
  bigLogo: {
    width: 120,
    height: 120,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const typography = StyleSheet.create({
  header: {
    color: "#023047",
    fontSize: 30,
    marginBottom: 36
  }
});

const flattenStyle = StyleSheet.flatten([
  page.text,
  typography.header
]);


export default App;