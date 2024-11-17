import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList, 
  TouchableOpacity
} from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Krish");
  const [age, setAge] = useState(20);

  const clickHandler = () => {
    setName("Not Krish");
    setAge(0);
  };

  const [users, setUsers] = useState([
    { name: "user1", key: "1" },
    { name: "user2", key: "2" },
    { name: "user3", key: "3" },
    { name: "user4", key: "4" },
    { name: "user5", key: "5" },
    { name: "user6", key: "6" },
  ]);

  const [blogs, setBlogs] = useState([
    { name: "blog2", id: "2" },
    { name: "blog1", id: "1" },
    { name: "blog3", id: "3" },
    { name: "blog4", id: "4" },
    { name: "blog5", id: "5" },
    { name: "blog6", id: "6" },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setBlogs((prevBlogs) => {
      return prevBlogs.filter((blog) => blog.id!== id);
    })
  }



  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to React Native Blog</Text>
      </View>
      <View style={styles.body}>
        <Text> Here you can add and read other's Blogs </Text>
      </View>
      <Text>My name is {name}</Text>
      <Text>My age is {age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Remove name" onPress={clickHandler} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric" // To restrict input to numeric characters
        onChangeText={(value) => setAge(value)}
      />
    {/* Scrolling and displaying List */}
      <Text>List of Users</Text>
      <ScrollView >
      {users.map((item) => {
        return (
          <View>
            <View key={item.key}>
              <Text style={styles.user}>{item.name}</Text>
            </View>
          </View>
        );
      })}
      </ScrollView>

      <Text>List of Blogs (Click on a Blog to Delete it)</Text>

      <FlatList
        numColumns={2}
        keyExtractor={(item) =>  item.id}
        data={blogs}
        renderItem = {({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.blog}>{item.name}</Text> 
          </TouchableOpacity>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
    marginBottom: 20,
  },
  headerText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    margin: 10,
    width: 200,
  },
  user: {
    marginBottom: 24,
    padding: 10,
    backgroundColor: "lightblue",
    fontSize: 24,
    textAlign: "center",
  },
  blog: {
    marginBottom: 24,
    marginHorizontal: 25,
    padding: 10,
    backgroundColor: "lightgreen",
    fontSize: 24,
    textAlign: "center",
  }
});
