const URL = "https://api.npoint.io/66466e607109c64c28f2";

class CreatexAPI {
  fetchCourses = async () => {
    const res = await fetch(`${URL}/courses`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return await res.json();
  };
}

export default new CreatexAPI();
