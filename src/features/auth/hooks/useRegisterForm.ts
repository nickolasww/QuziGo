import { useState } from "react";
import { validateEmail, validatePassword, validateUsername } from "@/features/auth/utils/validation";
import { saveUser, findUserByEmail, findUserByUsername, type User } from "@/features/auth/utils/auth";

interface RegisterFormData {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

export const useRegisterForm = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState({ title: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (!formData.fullName || !formData.username || !formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      setError(passwordValidation.message || "Invalid password");
      setLoading(false);
      return;
    }

    const usernameValidation = validateUsername(formData.username);
    if (!usernameValidation.isValid) {
      setError(usernameValidation.message || "Invalid username");
      setLoading(false);
      return;
    }

    // Check if email already exists
    if (findUserByEmail(formData.email)) {
      setError("Email already registered");
      setLoading(false);
      return;
    }

    // Check if username already exists
    if (findUserByUsername(formData.username)) {
      setError("Username already taken");
      setLoading(false);
      return;
    }

    // Simulate async operation
    setTimeout(() => {
      try {
        const newUser: User = {
          id: Date.now(),
          fullName: formData.fullName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          createdAt: new Date().toISOString(),
        };

        saveUser(newUser);
        setSuccessMessage({
          title: "Account Created! 🎉",
          message: `Welcome ${formData.fullName}! Your account has been created successfully. You can now log in with your credentials.`,
        });
        setShowSuccessModal(true);

        // Redirect after modal is shown
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } catch (err) {
        setError("Failed to create account. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 800);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    window.location.href = "/login";
  };

  return {
    formData,
    error,
    loading,
    showSuccessModal,
    successMessage,
    handleChange,
    handleSubmit,
    handleCloseModal,
  };
};
