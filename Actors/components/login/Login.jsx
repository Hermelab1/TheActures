import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from './login.style'; // Import your styles
import { router } from "expo-router";

const Login = () => {
  // State variables to manage input and loading state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle login logic
  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill out both fields");
      return;
    }

    // Start loading
    setLoading(true);
    setError("");

    // Simulate API call (replace with actual login logic, e.g., Firebase/Auth API)
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        // Successful login
        setLoading(false);
        alert("Login Successful!");
        router.replace('/wellcome')
        // Navigate to another screen (e.g., home)
      } else {
        // Failed login
        setLoading(false);
        setError("Invalid credentials");
      }
    }, 2000); // Simulating a network request delay
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {/* Display error message if any */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Login Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin} 
        disabled={loading} 
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Login;
