import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validateRequired } from "@/features/auth/utils/validation";
import { authenticateUser, setCurrentUser } from "@/features/auth/utils/auth";

interface LoginFormData {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
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
    const emailValidation = validateRequired(formData.email, "Email");
    if (!emailValidation.isValid) {
      setError(emailValidation.message || "Please fill in all fields");
      setLoading(false);
      return;
    }

    const passwordValidation = validateRequired(formData.password, "Password");
    if (!passwordValidation.isValid) {
      setError(passwordValidation.message || "Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // Simulate async operation
    setTimeout(() => {
      const user = authenticateUser(formData.email, formData.password);

      if (user) {
        setCurrentUser(user);
        setSuccessMessage({
          title: "Welcome Back! 🎉",
          message: `Hi ${user.fullName || user.username}! You have successfully logged in to your account.`,
        });
        setShowSuccessModal(true);
        
        // Redirect after modal is shown - smooth navigation without reload
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 800);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/dashboard');
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
