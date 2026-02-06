

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    stats: {
      users: 10000,
    },
  };
}

export default async function LoadingExample() {
    const data = await getData()

  return <div className="p-4 m-4  bg-red">
    <h2>Loading users please wait</h2>
    <p>{data.stats.users}</p>
  </div>;
}
