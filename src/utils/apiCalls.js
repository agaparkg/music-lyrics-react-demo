const apiUrl = "https://api.lyrics.ovh";

export const getSongs = async (queryTxt) => {
  try {
    const res = await fetch(`${apiUrl}/suggest/${queryTxt}`);
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("Song not found.");
      } else if (res.status === 500) {
        throw new Error("Server error. Please try again later.");
      } else {
        throw new Error("Unknown error occurred.");
      }
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
