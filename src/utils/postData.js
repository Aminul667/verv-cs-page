export const postData = async (data, resetCallback, toast) => {
  try {
    const url = "http://localhost:5000/api/v1/users/save-email";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success("Thank you for being with us!");
      if (resetCallback) resetCallback();
    } else {
      const errorData = await response.json();
      toast.error(errorData.message || "Failed to submit the form.");
    }
  } catch (error) {
    toast.error("An unexpected error occurred.");
    console.error("Error submitting form:", error);
  }
};
