export const getParcels = async () => {
  try {
    const result = await fetch(
      "https://http://localhost:7071/api/GetTrigger"

    );
    const data = await result.json();
    console.log(data)
    return data;
  } catch (e) {
    console.log(e);
  }
};

