import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=15`
      );
      setData(res.data);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="bg-black min-h-screen flex flex-col p-8 text-white">
      <h1 className="text-center text-3xl font-bold">Page: {page}</h1>

      <div className="flex flex-wrap justify-center gap-8 p-2">
        {loading ? (
          <h1 className="text-xl">Loading...</h1>
        ) : data.length === 0 ? (
          <h1 className="text-xl">No Data Available</h1>
        ) : (
          data.map((item) => (
            <div key={item.id} className="w-44 p-3 rounded-2xl">
              <a href={item.url} target="_blank" rel="noreferrer">
                <img
                  src={item.download_url}
                  alt={item.author}
                  className="h-40 w-full object-cover rounded"
                />
                <h1 className="font-bold text-sm mt-2">{item.author}</h1>
              </a>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center items-center space-x-4 m-10">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="bg-amber-600 text-black rounded-xl cursor-pointer active:scale-95 font-semibold text-lg px-4 py-2 mt-6 disabled:opacity-50"
          disabled={page === 1}
        >
          Prev
        </button>
          <h4 className="font-semibold text-lg px-4 py-2 mt-6">page :{page}</h4>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-amber-600 text-black rounded-xl cursor-pointer active:scale-95 font-semibold text-lg px-4 py-2 mt-6"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
