export async function GetRequest(url) {
  const response = await fetch(url, {
    contentType: "application/json",
    type: "get",
  });
  const data = await response.json();
  return data;
}
