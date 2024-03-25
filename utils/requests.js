export async function GetRequest(url) {
  const response = await fetch(url, {
    cache: "no-store",
    // next: {
    // revalidate: 5,
    // },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
export async function DeleteRequest(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
