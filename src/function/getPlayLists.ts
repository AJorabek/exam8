export async function getPlayLists(token: string) {
  const resp = await fetch(
    "https://api.spotify.com/v1/browse/categories/toplists/playlists",
    {
      headers: {
        Authorization: `'Bearer ${token}`,
      },
    }
  );
  const data = await resp.json();
  return data;
  //   setData(data);
}

export async function getData(token: string, url: string) {
  const resp = await fetch(url, {
    headers: {
      Authorization: `'Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const data = await resp.json();
  return data;
  //   setData(data);
}
