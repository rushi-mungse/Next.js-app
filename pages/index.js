export default function Home() {
  return (
    <>
      <style jsx>
        {`
          .home_page {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          h1 {
            color: red;
          }
        `}
      </style>

      <div className="home_page">
        <h1>Welcome to Hunting coders blogs.</h1>
      </div>
    </>
  );
}
