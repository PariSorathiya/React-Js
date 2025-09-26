import React, { useState } from 'react'

export default function Form() {

        const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [city, setCity] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = () => {
        if (!name || !age || !email || !password || !confirmPassword || !city) {
            alert("⚠ Please fill all fields!");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (!email.includes("@")) {
            alert("Invalid Email!");
            return;
        }

        setSubmittedData({ name, age, email, city });

        // Reset form fields
        setName("");
        setAge("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setCity("");
    };


  return (
    <div>
            <h1>Form Validation</h1>
            <div>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label>Age: </label>
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter your age"
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
 onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                    />
                </div>
                <div>
                    <label>City: </label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter your city"
                    />
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit Form
                </button>
            </div>

            {submittedData && (
                <div>
                    <h2>Form Submitted Successfully!</h2>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Age:</strong> {submittedData.age}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>City:</strong> {submittedData.city}</p>
                </div>
  )}
        </div>
    );
}
