const URL = "https://api.npoint.io/66466e607109c64c28f2";

class CreatexAPI {
  fetchData = async (url: string) => {
    const res = await fetch(`${URL}/${url}`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return await res.json();
  };
}

export default new CreatexAPI();
